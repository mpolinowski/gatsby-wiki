import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import GridList from '../../components/GridList'

const firstnest = () => (
  <div>
    <GridList /><br/><br/>
    <Link to="/nestedroutes/"><button>Go Back</button></Link>
  </div>
)

export default firstnest
