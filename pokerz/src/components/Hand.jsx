import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card.jsx'
import '../css/hand.css';

class App extends Component {

  static propTypes = {
    cards: PropTypes.array,
    winners: PropTypes.array,
  };

  static defaultProps = {
    cards: [],
    isCommunity: false,
    winners: [],
  }

  renderCards() {
    debugger;
    const isWinner = true;
    return this.props.cards.map((card) => {
      return (<Card isWinner={isWinner} suit={card[0]} value={card[1]}/>);
    });
  }

  // don't show the button on a community hand
  renderScoreButton() {
    const onScoreClick = this.props.scoreHand.bind(this);

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
