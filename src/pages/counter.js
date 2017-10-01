import React from 'react'
import PropTypes from 'prop-types'

class Counter extends React.Component {
  constructor() {
    super()
    this.state = { count: 0 }
  }
  render() {
    return <div>
            <h3 style={{color: this.props.color}}>{this.props.header}</h3>
            <p>current count: {this.state.count}</p>
            <button onClick={() => this.setState({ count: this.state.count + 1 })}>plus</button>
            <button onClick={() => this.setState({ count: this.state.count - 1 })}>minus</button>
          </div>
  }

}

// Specifies the default values for props:
Counter.defaultProps = {
header: 'Default Counter',
color: 'black'
}

export default Counter
