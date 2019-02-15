import React, { Component } from 'react';
import Hand from './components/Hand.jsx'
import './App.css';
import {importAll} from './utils.js';
import Deck from './Deck';
import {parseWinnerObj, scoreHand, resolveGame} from './utils.js';
import {BrowserRouter, Route} from 'react-router-dom';



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
    const deck = new Deck(1600);
    const community = [deck.drawCard(), deck.drawCard(), deck.drawCard(), deck.drawCard(), deck.drawCard()];
    const handOne = [deck.drawCard(), deck.drawCard()];
    const handTwo = [deck.drawCard(), deck.drawCard()];
    const winners = [];

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
    const resolved = resolveGame(this.state.handOne, this.state.handTwo, this.state.community);
    this.setState({
      winners: parseWinnerObj(resolved)
    });
  }

  render() {
    window.AppState = {};
    const onHandOneClick = this.scoreOne.bind(this);
    const onHandTwoClick = this.scoreTwo.bind(this);
    const onResolveGame = this.resolveGame.bind(this);
    return (
      <BrowserRouter>
        <div>
          <Route exact={true} path='/Cardz/' render={() => (
            <div className="App">
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
          )}/>
          <Route exact={true} path='/Cardz/1' render={() => (
            <div> hand one
              <Hand
                cards={this.state.handOne}
                scoreHand={onHandOneClick}
                winners={this.state.winners}
              />
            </div>
          )}/>
          <Route exact={true} path='/Cardz/2' render={() => (
            <div> hand two
              <Hand
                cards={this.state.handTwo}
                scoreHand={onHandTwoClick}
                winners={this.state.winners}
              />
            </div>
          )}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
