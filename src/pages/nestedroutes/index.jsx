import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

import { withStyles } from 'material-ui/styles'
import Button from 'material-ui/Button'

import FixedTabs from '../../components/FixedTabs'
import ScrollableTabs from '../../components/ScrollableTabs'

const nestedroutes = ({data}) => (
  <div>
    <Link to="/nestedroutes/firstnest/" style={{ textDecoration: 'none' }}><Button raised color="primary">Go to Photo Grid</Button></Link><br/><br/>
    <Link to="/nestedroutes/secondnest/" style={{ textDecoration: 'none' }}><Button raised color="primary">Go to Forms &amp; Inputs</Button></Link><br/><br/>
    <Link to="/" style={{ textDecoration: 'none' }}><Button raised color="primary">Go back to the homepage</Button></Link><br/><br/><br/><br/>
    <h2>Tabbed Navigation Elements</h2>
    <FixedTabs />
    <ScrollableTabs />
  </div>
)

export default nestedroutes
