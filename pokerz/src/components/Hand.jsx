import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card.jsx'
import '../css/hand.css';

class App extends Component {

  static propTypes = {
    cards: PropTypes.array,
  };

  static defaultProps = {
    cards: [],
  }

  renderCards() {
    return this.props.cards.map((card) => {
      return (<Card suit={card[0]} value={card[1]}/>);
    });
  }

  render() {
    return (
      <div className="hand">
          {this.renderCards()}
      </div>
    );
  }
}

export default App;
