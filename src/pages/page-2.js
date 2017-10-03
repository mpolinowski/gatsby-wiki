import React from 'react'
import Link from 'gatsby-link'

const SecondPage = () => (
  <div>
    <h1>Hi from the second page</h1>
    <p>Trying out routing in Gatsby.js</p>
    <Link to="/"><button>Go back to the homepage</button></Link>
  </div>
)

export default SecondPage
