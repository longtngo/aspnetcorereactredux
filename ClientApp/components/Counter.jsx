import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import * as CounterStore from '../store/Counter'

class Counter extends Component {
  static propTypes = {
    count: PropTypes.number,
    increment: PropTypes.func.isRequired
  }

  render () {
    return (
      <div>
        <h1>Double Counter</h1>

        <p>This is a simple example of a React component.</p>

        <p>Current count: <strong>{ this.props.count }</strong></p>

        <button onClick={() => { this.props.increment() }}>Increment</button>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    count: state.counter.count
  };
}

function mapDispatchToProps (dispatch) {
  return {
    increment: () => dispatch(CounterStore.actions.increment())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
