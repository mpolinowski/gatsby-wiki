import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

import { withStyles } from 'material-ui/styles'
import Button from 'material-ui/Button'

import GridList from '../../components/GridList'

const firstnest = () => (
  <div>
    <GridList /><br/><br/>
    <Link to="/nestedroutes/" style={{ textDecoration: 'none' }}><Button raised color="primary">Go back</Button></Link>
  </div>
)

export default firstnest
