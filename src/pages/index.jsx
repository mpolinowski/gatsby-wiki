import React from 'react'
import Link from 'gatsby-link'

import IndexButtons from './../components/IndexButtons'
import Counter from './../components/Counter'

const IndexPage = ({data},) => (
  <div>
    <h1>{data.site.siteMetadata.description}</h1>
    <p>Welcome to our new Gatsby site.</p>
    <p>Is this the right framework to rebuild our Wiki on? I don't know yet...</p>
    <IndexButtons />
    <br/><br/><br/><br/>
    <Counter header="This <Counter /> is embedded inside <IndexPage />" color="rebeccapurple" />
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
