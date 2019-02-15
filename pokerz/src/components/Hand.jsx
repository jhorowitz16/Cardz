import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card.jsx'
import '../css/hand.css';

import {valueToShortString} from '../utils.js';

class App extends Component {

  static propTypes = {
    cards: PropTypes.array,
    hasScoreButton: PropTypes.boolean,
    isCommunity: PropTypes.boolean,
    winners: PropTypes.array,
  };

  static defaultProps = {
    cards: [],
    hasScoreButton: false,
    isCommunity: false,
    winners: [],
  }

  renderCards() {
    const winners = this.props.winners;
    return this.props.cards.map((card) => {
      const stringRep = card[0] + "," + valueToShortString(card[1]);
      const isWinner = winners.includes(stringRep);
      console.log(isWinner);
      return (<Card isWinner={isWinner} suit={card[0]} value={card[1]}/>);
    });
  }

  // don't show the button on a community hand
  renderScoreButton() {
    const onScoreClick = this.props.scoreHand.bind(this);
    if (!this.props.hasScoreButton) {
      return null;
    }
    if (!this.props.isCommunity) {
      return (<button className="hand__button--hand" onClick={onScoreClick}>Score</button>);
    } else {
      return (<button className="hand__button--hand hand__button--community" onClick={onScoreClick}>Resolve Game</button>);
    }
  }

  render() {
    return (
      <div className="hand">
        <div className="hand__cards">
            {this.renderCards()}
        </div>
        <div className="hand__button">
            {this.renderScoreButton()}
        </div>
      </div>
    );
  }
}

export default App;
