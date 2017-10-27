import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import Autocomplete from '../../components/Autocomplete'

const secondnest = () => (
  <div>
    <Autocomplete /><br/><br/>
    <Link to="/nestedroutes/"><button>Go Back</button></Link>
  </div>
)

export default secondnest
