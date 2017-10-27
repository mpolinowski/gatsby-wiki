import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import FixedTabs from '../../components/FixedTabs'
import ScrollableTabs from '../../components/ScrollableTabs'

const nestedroutes = ({data}) => (
  <div>
    <Link to="/nestedroutes/firstnest/"><button>Go to Photo Grid</button></Link><br/><br/>
    <Link to="/nestedroutes/secondnest/"><button>Go to Autocomplete</button></Link><br/><br/>
    <Link to="/"><button>Go to Back Home</button></Link><br/><br/>
    <FixedTabs />
    <ScrollableTabs />
  </div>
)

export default nestedroutes
