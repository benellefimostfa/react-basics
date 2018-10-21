import React, { Component } from 'react';
import logo from './Assets/favicon.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <p className="Fist-paragraph">
            This is the first paragraph.
          </p>
          <br/>
          <hr/>
          <p className="Second-paragraph">
            This is the second paragraph.
          </p>
        </header>
      </div>
    );
  }
}

export default App;
