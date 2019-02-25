import React, { Component } from 'react';
import './App.css';
import Header from './header.js';
import UnderHead from './under-head.js';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <UnderHead />
      </div>

    );
  }
}

export default App;
