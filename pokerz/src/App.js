import React, { Component } from 'react';
import logo from './logo.svg';
import Hand from './components/Hand.jsx'
import './App.css';
import {importAll} from './utils.js';

import Deck from './Deck';

class App extends Component {

  componentDidMount() {
    window.AppState.cards = importAll(require.context('./images/cards/', false, /\.(png|jpe?g|svg)$/));
    window.AppState.deck = new Deck(1);
  }

  render() {
    window.AppState = {};
    const cards = [['c', 2], ['d', 12]];
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Hand cards={cards}/>
        </header>
      </div>
    );
  }
}

export default App;
