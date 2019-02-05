import React, { Component } from 'react';

import Login from './LogIn/Login';
import Register from './Regoster/Register';

class Header extends Component {
  render(){
    return (<div>
      {false && <Login />}
      <Register/>
    </div>)
  }
}

export default Header;