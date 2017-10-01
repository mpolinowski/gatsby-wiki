import React from 'react'
import Link from 'gatsby-link'

import Counter from './counter'

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to Page 2</Link><br/><br/>
    <Counter header="This is the Index Counter" color="rebeccapurple" />
  </div>
)

export default IndexPage
