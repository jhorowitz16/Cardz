import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card.jsx'
import '../css/hand.css';

class App extends Component {

  static propTypes = {
    cards: PropTypes.array,
    scoreHand: PropTypes.function,
  };

  static defaultProps = {
    cards: [],
    isCommunity: false,
    scoreHand: () => {debugger;},
  }

  renderCards() {
    return this.props.cards.map((card) => {
      return (<Card suit={card[0]} value={card[1]}/>);
    });
  }

  // don't show the button on a community hand
  renderScoreButton() {
    const onScoreClick = this.props.scoreHand.bind(this);

    if (!this.props.isCommunity) {
      return (<button onClick={onScoreClick}>Score</button>);
    } else {
      return null;
    }
  }

  render() {
    return (
      <div className="hand">
          {this.renderCards()}
          {this.renderScoreButton()}
      </div>
    );
  }
}

export default App;
