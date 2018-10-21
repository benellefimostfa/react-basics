import React, { Component } from 'react';
import './App.css';
import Box from './components/box';

class App extends Component {
  render() {
    return (
      <div>
        <Box name='full time' des="lorem1"/>
        <Box name='part time' des="lorem2"/>
        <Box name='kids' des="lorem3"/>
        <Box name='summer' des="lorem4"/>
      </div>
    );
  }
}

export default App;
