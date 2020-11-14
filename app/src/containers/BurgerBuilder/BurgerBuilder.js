// Burger Builder stateful component

import React, { Component } from 'react';

import Aux from '../../hoc/Aux'
import Burger from '../../components/Home/Burger'

class BurgerBuilder extends Component {
  render () {
    return (
      <Aux>
        <Burger />
        <div> Build controls </div>
      </Aux>
    )
  }
}

export default BurgerBuilder