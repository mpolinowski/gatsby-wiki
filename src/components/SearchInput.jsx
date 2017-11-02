import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Button from 'material-ui/Button'

export default class Form extends React.Component {
  state= {
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    passWord: '',
  }

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  onSubmit = e => {
      e.preventDefault()
      this.props.onSubmit(this.state)
      this.setState({
        firstName: '',
        lastName: '',
        userName: '',
        email: '',
        passWord: '',
      })
  }

render() {
  return (
      <form>
        <input
          value={this.state.firstName}
          placeholder='First Name'
          onChange={e => this.setState({firstName: e.target.value})}/><br/>
        <input
          value={this.state.lastName}
          placeholder='Last Name'
          onChange={e => this.setState({lastName: e.target.value})}/><br/>
        <input
          value={this.state.userName}
          placeholder='User Name'
          onChange={e => this.setState({userName: e.target.value})}/><br/>
        <input
          value={this.state.email}
          placeholder='Email Address'
          onChange={e => this.setState({email: e.target.value})}/><br/>
        <input
          value={this.state.passWord}
          placeholder='Password'
          onChange={e => this.setState({passWord: e.target.value})}/><br/>
      </form>
    );
  }
}
