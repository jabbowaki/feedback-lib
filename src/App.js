import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Form } from './form.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Feedback-libs</h1>
        </header>
        <p className="App-intro">
          A friendly tool to help you come up with your feedback!
        </p>
        <Form />
      </div>
    );
  }
}

export default App;
