import React, { Component } from 'react';
import Link from 'gatsby-link'
import elasticsearch from 'elasticsearch';

const connectionString = 'localhost:9200';
const _index = 'wiki2_de_2017_09_09';
const _type = 'article';

let client = new elasticsearch.Client({
  host: connectionString,
  log: "trace"
});

export class Search extends Component {
  constructor(props) {
    super(props)
      this.state = { results: [] };
      this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
      const search_query = event.target.value;

      client.search({
  			index: _index,
  			type: _type,
  			body: {
  				query: {
  						multi_match: {
  								query: search_query,
  								fields: ['title^100', 'tags^100', 'abstract^20', 'description^10', 'chapter^5', 'title2^10', 'description2^10'],
  								fuzziness: 1,
  							},
  					},
  			},
  		}).then(function(body) {
            this.setState({ results: body.hits.hits });
          }.bind(this),
          function(error) {
            console.trace(error.message);
          }
        );
    }

    render() {
      return (
        <div className="container">
          <input type="text" onChange={this.handleChange} />
          <SearchResults results={this.state.results} />
        </div>
      );
    }
}

const SearchResults = ({results}) => (
  <div className="search_results">
    <hr />

    <table>
      <thead>
        <tr>
          <th>Thumb</th>
          <th>Title</th>
        </tr>
      </thead>
      <tbody>
        {results.map((result , i) =>
          <ResultRow key={i}
                     image={result._source.image}
                     title={result._source.title2} />
        )}
      </tbody>
    </table>
    <br/><br/>
    <Link to="/"><button>Go back to the homepage</button></Link>
  </div>
)

const ResultRow = ({ title, image }) => (
  <tr>
    <td>
      <img src={image} />
    </td>
    <td>
      <p>{title}</p>
    </td>
  </tr>
)

export default Search
