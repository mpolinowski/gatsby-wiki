import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import EnhancedTable from '../components/EnhancedTable'

const FirstPage = ({data}) => (
  <div>
    <EnhancedTable /><br/><br/>
    <Link to="/"><button>Go Back</button></Link>
  </div>
)

export default FirstPage
