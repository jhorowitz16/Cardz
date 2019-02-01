import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../css/card.css'
import {charToSuit} from '../utils.js';

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
    this.state = {};
  }

  test() {
      debugger;
  }

  getCardImg() {
    const filename = this.props.value + "_of_" + charToSuit(this.props.suit) + ".png";
    const image = window.AppState.cards[filename];
    debugger;
  }

  shouldComponentUpdate(nextState) {
    return false;
  }

  render() {
    const { suit, value } = this.props;
    // const imgSource = this.getCardImg(suit, value);

    const onCardClick = this.getCardImg.bind(this);

    return (
      <div className='card' onClick={onCardClick}>
        <div className='card__front'>
          I am a card.

          { this.props.suit }

          { this.props.number}
        </div>
      </div>
    );
  }
}

export default Card;
