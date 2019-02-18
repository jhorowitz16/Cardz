import React, { Component } from 'react';
import Hand from './components/Hand.jsx'
import './App.css';
import {importAll} from './utils.js';
import Deck from './Deck';
import {parseWinnerObj, scoreHand, resolveGame} from './utils.js';
import queryString from 'query-string';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = this.buildState();
  }

  shouldComponentUpdate(nextState) {
    return this.state.handOne !== nextState.filename ||
      this.state.handTwo !== nextState.handTwo ||
      this.state.winners !== nextState.winners;
  }

  componentDidMount() {
    window.AppState.cards = importAll(require.context('./images/cards/', false, /\.(png|jpe?g|svg)$/));
  }

  buildState() {
    const query = queryString.parse(window.location.search)
    const seed = ('seed' in query) ? query.seed : 0;
    const deck = new Deck(parseInt(seed));
    const community = [deck.drawCard(), deck.drawCard(), deck.drawCard(), deck.drawCard(), deck.drawCard()];
    const handOne = [deck.drawCard(), deck.drawCard()];
    const handTwo = [deck.drawCard(), deck.drawCard()];
    const winners = [];

    return {
      community: community,
      deck: deck,
      handOne: handOne,
      handTwo: handTwo,
      query: query,
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
    const resolved = resolveGame(this.state.handOne, this.state.handTwo, this.state.community);
    this.setState({
      winners: parseWinnerObj(resolved)
    });
  }

  renderCommunity() {
    if (this.state.query.p === "1" || this.state.query.p === "2") {
      return null;
    }
    const onHandOneClick = this.scoreOne.bind(this);
    const onResolveGame = this.resolveGame.bind(this);
    const onHandTwoClick = this.scoreTwo.bind(this);
    return (
      <div className="App">
        test new
        <header className="App-header">
          <Hand
            cards={this.state.handOne}
            scoreHand={onHandOneClick}
            winners={this.state.winners}
          />
          <Hand
            cards={this.state.community}
            hasScoreButton
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

  renderPlayerOne() {
    if (this.state.query.p !== "1") {
      return null;
    }
    const onHandOneClick = this.scoreOne.bind(this);
    return (
      <div> hand one
        <Hand
          cards={this.state.handOne}
          scoreHand={onHandOneClick}
          winners={this.state.winners}
        />
      </div>
    );
  }

  renderPlayerTwo() {
    if (this.state.query.p !== "2") {
      return null;
    }
    const onHandTwoClick = this.scoreTwo.bind(this);
    return (
      <div> hand two
        <Hand
          cards={this.state.handTwo}
          scoreHand={onHandTwoClick}
          winners={this.state.winners}
        />
      </div>
    );
  }

  render() {
    window.AppState = {};
    return (
      <div>
        { this.renderPlayerOne() }
        { this.renderPlayerTwo() }
        { this.renderCommunity() }
      </div>
    );
  }
}

export default App;
