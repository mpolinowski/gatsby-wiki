import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

import { withStyles } from 'material-ui/styles'
import Button from 'material-ui/Button'

const SecondPage = ({data}) => (
  <div>
    <h1>Hi from the second page</h1>
    <p>Trying out routing in Gatsby.js</p>

    <table>
      <thead>
        <tr>
          <th>relativePath</th>
          <th>prettySize</th>
          <th>extension</th>
          <th>birthTime</th>
        </tr>
      </thead>
      <tbody>
        {data.allFile.edges.map(({node}, index) =>
          <tr key={index}>
            <td>
              {node.relativePath}
            </td>
            <td>
              {node.prettySize}
            </td>
            <td>
              {node.extension}
            </td>
            <td>
              {node.birthTime}
            </td>
          </tr>
        )}
      </tbody>
    </table>
    <br/><br/>
    <Link to="/" style={{ textDecoration: 'none' }}><Button raised color="primary">Go back to the homepage</Button></Link>
  </div>
)

export const query = graphql`
  query MyFilesQuery {
    allFile {
      edges {
          node {
            relativePath
            prettySize
            extension
            birthTime(fromNow: true)
        }
      }
    }
  }
`

export default SecondPage
