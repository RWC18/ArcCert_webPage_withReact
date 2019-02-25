import React, { Component } from 'react';
import './App.css';
import logo from './images/logo.png'

class LeftSide extends Component {
  render() {
    return (
		<div className="left-side">
			<a href="">
				<img src={ logo } />
			</a>
		</div>
    );
  }
}

export default LeftSide;
