import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import MenuItem from 'material-ui/Menu/MenuItem'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
});

class Form extends React.Component {

state= { // set initial state to empty strings
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    passWord: '',
  }

  handleChange = e => {
    this.props.onChange({ [e.target.name]: e.target.value })
    this.setState({
      [e.target.name]: e.target.value // change values for input fields and send them to component state
    })
  };

  onSubmit = e => {
      e.preventDefault() // prevent reloading on submit
      // this.props.onSubmit(this.state) only needed for onSubmit => changed to onChange
      this.setState({ // empty state after submit to clear fields
        firstName: '',
        lastName: '',
        userName: '',
        email: '',
        passWord: '',
      })
  }

  render() {
    const { classes } = this.props

    return (
      <div>
          <form className="container">
            <TextField
              name='firstName'
              type='text'
              value={this.state.firstName}
              placeholder='First Name'
              fullWidth
              margin='normal'
              onChange={e => this.handleChange(e)}/><br/>
            <TextField
              name='lastName'
              type='text'
              value={this.state.lastName}
              placeholder='Last Name'
              fullWidth
              margin='normal'
              onChange={e => this.handleChange(e)}/><br/>
            <TextField
              name='userName'
              type='text'
              required
              value={this.state.userName}
              placeholder='User Name'
              fullWidth
              margin='normal'
              onChange={e => this.handleChange(e)}/><br/>
            <TextField
              name='email'
              type='email'
              required
              value={this.state.email}
              placeholder='Email Address'
              fullWidth
              margin='normal'
              onChange={e => this.handleChange(e)}/><br/>
            <TextField
              name='passWord'
              type='password'
              min='8'
              value={this.state.passWord}
              placeholder='Password (min 8 Characters)'
              fullWidth
              margin='normal'
              onChange={e => this.handleChange(e)}/><br/><br/>
            <Button raised color="primary" className={classes.button} onClick={ (e) => this.onSubmit(e)}>Submit with preventDefault</Button>
          </form>
        </div>
      );
    }
}

export default withStyles(styles)(Form);

// ==================================================
// This is the onSubmit version for the form (see additional changes inside secondnest.jsx)
// export default class Form extends React.Component {
//   state= {
//     firstName: '',
//     lastName: '',
//     userName: '',
//     email: '',
//     passWord: '',
//   }
//
//   change = e => {
//     this.setState({
//       [e.target.name]: e.target.value
//     })
//   };
//
//   onSubmit = e => {
//       e.preventDefault()
//       this.props.onSubmit(this.state)
//       this.setState({
//         firstName: '',
//         lastName: '',
//         userName: '',
//         email: '',
//         passWord: '',
//       })
//   }
//
//   render() {
//     return (
//         <form>
//           <input
//             name='firstName'
//             value={this.state.firstName}
//             placeholder='First Name'
//             onChange={e => this.change(e)}/><br/>
//           <input
//             name='lastName'
//             value={this.state.lastName}
//             placeholder='Last Name'
//             onChange={e => this.change(e)}/><br/>
//           <input
//             name='userName'
//             value={this.state.userName}
//             placeholder='User Name'
//             onChange={e => this.change(e)}/><br/>
//           <input
//             name='email'
//             value={this.state.email}
//             placeholder='Email Address'
//             onChange={e => this.change(e)}/><br/>
//           <input
//             name='passWord'
//             type='password'
//             value={this.state.passWord}
//             placeholder='Password'
//             onChange={e => this.change(e)}/><br/>
//           <button onClick={ (e) => this.onSubmit(e)}>Submit with preventDefault</button>
//         </form>
//       );
//     }
// }


// ###############################################################

// change function added to cleanUp the code, see below
//
// render() {
//   return (
//       <form>
//         <input
//           value={this.state.firstName}
//           placeholder='First Name'
//           onChange={e => this.setState({firstName: e.target.value})}/><br/>
//         <input
//           value={this.state.lastName}
//           placeholder='Last Name'
//           onChange={e => this.setState({lastName: e.target.value})}/><br/>
//         <input
//           value={this.state.userName}
//           placeholder='User Name'
//           onChange={e => this.setState({userName: e.target.value})}/><br/>
//         <input
//           value={this.state.email}
//           placeholder='Email Address'
//           onChange={e => this.setState({email: e.target.value})}/><br/>
//         <input
//           value={this.state.passWord}
//           placeholder='Password'
//           onChange={e => this.setState({passWord: e.target.value})}/><br/>
//       </form>
//     );
//   }
// }
