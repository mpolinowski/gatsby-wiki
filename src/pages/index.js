import React from 'react'
import Link from 'gatsby-link'

import Counter from './counter'

const IndexPage = ({data}) => (
  <div>
    <h1>{data.site.siteMetadata.description}</h1>
    <p>Welcome to our new Gatsby site.</p>
    <p>Is this the right framework to rebuild our Wiki on? I don't know yet...</p>
    <Link to="/page-2/"><button>Go to Page 2</button></Link><br/><br/>
    <br/><br/><br/><br/>
    <Counter header="This <Counter /> is embedded inside <IndexPage />" color="rebeccapurple" /><br/><br/><br/><br/>
    <Link to="/counter/"><button>See Counter Component itself</button></Link>
  </div>
)

export const query = graphql`
  query FirstQuery {
    site {
      siteMetadata {
        title
        author
        description
      }
    }
  }
`

export default IndexPage
