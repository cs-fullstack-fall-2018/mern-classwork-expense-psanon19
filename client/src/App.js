import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BankTempSheet from './BankTempSheet.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src='https://media3.giphy.com/media/5MieXUz58ErOo/giphy.gif' className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Kingdom Bank</h1>
        </header>
          <BankTempSheet/>
        <p className="App-intro">

          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
