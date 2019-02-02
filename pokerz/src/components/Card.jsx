import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../css/card.css'
import {charToSuit} from '../utils.js';

import back from '../images/cards/back.png';

class Card extends Component {

  // for now define suit to be a single character string
  // value is an integer 2 to 14 inclusive
  static propTypes = {
    suit: PropTypes.string,
    value: PropTypes.number,
  };

  static defaultProps = {
    suit: 'c',
    value: 2,
  }

  constructor(props) {
    super(props);
    this.state = {
      image: back,
      filename: ''
    };
  }

  shouldComponentUpdate(nextState) {
    if (this.state.filename !== nextState.filename)
      debugger;
    return this.state.filename !== nextState.filename;
  }

  getCardImg() {
    const newFilename = this.props.value + "_of_" + charToSuit(this.props.suit) + ".png";
    this.setState({
      filename: newFilename,
      image: window.AppState.cards[newFilename]
    });
  }

  renderCardFront() {
    return (
      <div className=''>
          <img src={this.image} alt={this.filename}/>
          I am a card.

          { this.props.suit }

          { this.props.number}
        </div>
      );
  }

  render() {
    const { suit, value } = this.props;

    const onCardClick = this.getCardImg.bind(this);

    return (
      <div className='card' onClick={onCardClick}>
        <img
          className='card__img'
          src={this.state.image}
          alt={this.state.filename}/>
      </div>
    );
  }
}

export default Card;
