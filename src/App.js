import React, { Component } from 'react';
import './App.css';
import Programs from './components/Programs/Programs';
import Stats from './components/Stats/Stats';
import Locations from './components/Locations/Locations';


class App extends Component {
  render() {
    return (
      <div>
        <Programs />
        <Stats />
        <Locations />
      </div>
    );
  }
}

export default App;
