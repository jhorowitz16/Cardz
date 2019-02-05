import React, { Component } from 'react';
import logo from './logo.svg';
import Hand from './components/Hand.jsx'
import './App.css';
import {importAll} from './utils.js';
import Deck from './Deck';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = this.dealCards();
  }

  shouldComponentUpdate(nextState) {
    return this.state.handOne !== nextState.filename ||
      this.state.handTwo !== nextState.handTwo;
  }

  componentDidMount() {
    window.AppState.cards = importAll(require.context('./images/cards/', false, /\.(png|jpe?g|svg)$/));
  }

  dealCards() {
    const deck = new Deck(12);
    const community = [deck.drawCard(), deck.drawCard(), deck.drawCard(), deck.drawCard(), deck.drawCard()];
    const handOne = [deck.drawCard(), deck.drawCard()];
    const handTwo = [deck.drawCard(), deck.drawCard()];
    return {
      community: community,
      deck: deck,
      handOne: handOne,
      handTwo: handTwo,
    };
  }

  render() {
    window.AppState = {};
    return (
      <div className="App">
        <header className="App-header">
          <Hand cards={this.state.handOne}/>
          <Hand cards={this.state.community}/>
          <Hand cards={this.state.handTwo}/>
        </header>
      </div>
    );
  }
}

export default App;
