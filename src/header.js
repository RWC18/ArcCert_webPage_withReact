import React, { Component } from 'react';
import './App.css';
import LeftSide from './header-left-side.js'
import RightSide from './header-right-side.js'

class Header extends Component {
  render() {
    return (
    	<header className="head">
    		<LeftSide />
    		<RightSide />
    	</header>
    );
  }
}

export default Header;
