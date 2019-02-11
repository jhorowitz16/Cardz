import React, { Component } from 'react';
import Hand from './components/Hand.jsx'
import './App.css';
import {importAll} from './utils.js';
import Deck from './Deck';
import {parseWinnerObj, scoreHand, resolveGame} from './utils.js';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = this.buildState();
  }

  shouldComponentUpdate(nextState) {
    return this.state.handOne !== nextState.filename ||
      this.state.handTwo !== nextState.handTwo;
  }

  componentDidMount() {
    window.AppState.cards = importAll(require.context('./images/cards/', false, /\.(png|jpe?g|svg)$/));
  }

  buildState() {
    const deck = new Deck(16);
    const community = [deck.drawCard(), deck.drawCard(), deck.drawCard(), deck.drawCard(), deck.drawCard()];
    const handOne = [deck.drawCard(), deck.drawCard()];
    const handTwo = [deck.drawCard(), deck.drawCard()];
    const winnerObj = resolveGame(handOne, handTwo, community);
    const winners = parseWinnerObj(winnerObj);
    debugger;

    return {
      community: community,
      deck: deck,
      handOne: handOne,
      handTwo: handTwo,
      winners: winners,
    };
  }

  scoreOne() {
    const solved = scoreHand(this.state.handOne, this.state.community);
    alert(solved.descr);
    return solved.descr;
  }

  scoreTwo() {
    const solved = scoreHand(this.state.handTwo, this.state.community);
    alert(solved.descr);
    return solved.descr;
  }

  resolveGame() {
    return resolveGame(this.state.handOne, this.state.handTwo, this.state.community);
  }

  render() {
    window.AppState = {};
    const onHandOneClick = this.scoreOne.bind(this);
    const onHandTwoClick = this.scoreTwo.bind(this);
    const onResolveGame = this.resolveGame.bind(this);
    return (
      <div className="App">
        <header className="App-header">
          <Hand
            cards={this.state.handOne}
            scoreHand={onHandOneClick}
            winners={this.state.winners}
          />
          <Hand
            cards={this.state.community}
            isCommunity
            scoreHand={onResolveGame}
            winners={this.state.winners}
          />
          <Hand
            cards={this.state.handTwo}
            scoreHand={onHandTwoClick}
            winners={this.state.winners}
          />
        </header>
      </div>
    );
  }
}

export default App;
