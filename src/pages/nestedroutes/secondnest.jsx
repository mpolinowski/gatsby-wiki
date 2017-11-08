import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

import { withStyles } from 'material-ui/styles'
import Button from 'material-ui/Button'

import Autocomplete from '../../components/Autocomplete'
import FormInput from '../../components/FormInput'

class secondnest extends React.Component {

  state = {
    fields: {} // initialize state to receive inputs
  }

  onChange = updatedValue => {
    this.setState({
      fields: {
        ...this.state.fields, //keep values that are typed
        ...updatedValue //add new values while typing
      }
    })
  }

  render () {
    return <div>
        <h2>Autocomplete Input</h2>
        <p>
          This input field uses <a href="http://react-autosuggest.js.org" target="_blank">react-autosuggest</a> to complete your input compared to a hard-coded list of countries starting with the letter A.
        </p>
        <Autocomplete />

        <h2>Address Form</h2>
        <p>
          This form adds input to component state. Submit clears the input
          fields, but keeps values in state - the default browser reload is
          prevented
        </p>
        <FormInput onChange={fields => this.onChange(fields)} />
        <p>{JSON.stringify(this.state.fields, null, 2)}</p>
        <br />
        <br />

        <Link to="/nestedroutes/" style={{ textDecoration: "none" }}>
          <Button raised color="primary">
            Go back
          </Button>
        </Link>
      </div>;
  }
}

export default secondnest

// onSubmit Version (above Form renders onChange) => see additional changes in FormInput.JSX
//
// class secondnest extends React.Component {
//
//   state = {
//     fields: {}
//   }
//
//   onSubmit = fields => {
//     this.setState({fields})
//   }
//
//   render () {
//     return (
//     <div>
//       <FormInput onSubmit={fields => this.onSubmit(fields)} />
//       <p>
//         {JSON.stringify(this.state.fields, null, 2)}
//       </p><br/><br/>
//       <Autocomplete /><br/><br/>
//       <Link to="/nestedroutes/"><button>Go Back</button></Link>
//     </div>
//     )
//   }
// }
