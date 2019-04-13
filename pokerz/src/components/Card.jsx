import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../css/card.css'
import {charToSuit, valueToString} from '../utils.js';

import back from '../images/cards/back.png';

class Card extends Component {

  // for now define suit to be a single character string
  // value is an integer 2 to 14 inclusive
  static propTypes = {
    isWinner: PropTypes.boolean,
    suit: PropTypes.string,
    value: PropTypes.number,
  };

  static defaultProps = {
    isWinner: false,
    suit: 'c',
    value: 2,
  }

  constructor(props) {
    super(props);
    this.state = {
      image: null,
      filename: ''
    };
  }

  shouldComponentUpdate(nextState, nextProps) {
    return this.state.filename !== nextState.filename ||
      this.props.isWinner !== nextProps.isWinner;
  }

  getCardImg() {
    const valueString = valueToString(this.props.value);
    const newFilename = valueString + "_of_" + charToSuit(this.props.suit) + ".png";
    debugger;
    this.setState({
      filename: newFilename,
      image: window.AppState.cards[newFilename]
    });
  }

  render() {
    const onCardClick = this.getCardImg.bind(this);

    const cardClasses = this.props.isWinner ? 'card card--winner': 'card';

    return (
      <div className={cardClasses} onClick={onCardClick}>
        <img
          className='card__img--back'
          src={back}
          alt="back"/>
        <img
          className='card__img'
          src={this.state.image}
          alt={this.state.filename}/>
      </div>
    );
  }
}

export default Card;
