import React from 'react'
import Link from 'gatsby-link'

import Button from 'material-ui/Button'

import IndexButtons from './../components/IndexButtons'
import Counter from './../components/Counter'

const IndexPage = ({data}) => (
  <div>
    <h1>Welcome to our new Gatsby site.</h1>
    <p>Is this the right framework to rebuild our Wiki on? I don't know yet...</p>
    <IndexButtons />
    <br/><br/><br/><br/>
      <h2>Markdown Index</h2>
      <p>The table below sorts out all Markdown pages that are not inside the "Markdown Posts" chapter - as defined inside their frontmatter. It also applies a filter, to only display the latest 10 posts. Click on here to display &nbsp;
      <Link to="/md-posts/">
          all Markdown pages
      </Link>
      .</p>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
        {data.allMarkdownRemark.edges.map(post => (
          <tr key={post.node.id}>
            <td>
              {post.node.frontmatter.date}
            </td>
            <td>
              <Link
                to={post.node.frontmatter.path}>
                {post.node.frontmatter.title}
              </Link>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
      <br/><br/>
    <Counter header="This <Counter /> is embedded inside <IndexPage />" color="rebeccapurple" />
  </div>
)

export const pageQuery = graphql`
  query IndexQuery {
      allMarkdownRemark(limit: 10
      sort: {fields: [frontmatter___date], order: DESC}
      filter: { frontmatter: { chapter: {eq: "Markdown Posts"} }}
    ) {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
          }
        }
      }
    }
  }
`

export default IndexPage
