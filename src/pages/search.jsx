import React, { Component } from 'react'
import Link from 'gatsby-link'
import elasticsearch from 'elasticsearch'

import { withStyles } from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import Button from 'material-ui/Button'

import ResultCards from '../components/ResultCards'

const connectionString = 'localhost:9200'
const _index = 'wiki2_de_2017_09_09'
const _type = 'article'

let client = new elasticsearch.Client({
  host: connectionString,
  log: "trace"
})

const rootStyle = {
    flexGrow: 1,
    marginTop: 30,
  }

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
  <br/><hr/>

  <div className={rootStyle}>
    <Grid container spacing={24}>
      {results.map((result , i) =>
        <ResultCards key={i}
                     image={result._source.image}
                     title={result._source.title2}
                     link={result._source.link}
                     abstract={result._source.abstract}/>
      )}

      </Grid>
    </div>
    <br/><br/><Link to="/" style={{ textDecoration: 'none' }}><Button raised color="primary">Go back to the homepage</Button></Link>
  </div>
)

export default Search
