import React, { Component } from 'react';
import logo from './logo.svg';
import Hand from './components/Hand.jsx'
import './App.css';
import {importAll} from './utils.js';

class App extends Component {

  componentDidMount() {
    window.AppState.cards = importAll(require.context('./images/cards/', false, /\.(png|jpe?g|svg)$/));
  }

  render() {
    window.AppState = {};
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Hand/>
        </header>
      </div>
    );
  }
}

export default App;
