import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

import { withStyles } from 'material-ui/styles'
import Button from 'material-ui/Button'
import EnhancedTable from '../components/EnhancedTable'

const FirstPage = ({data}) => (
  <div>
    <EnhancedTable /><br/><br/>
    <Link to="/" style={{ textDecoration: 'none' }}><Button raised color="primary">Go back to the homepage</Button></Link>
  </div>
)

export default FirstPage
