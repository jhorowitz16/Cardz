import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../css/card.css'

class Card extends Component {

  // for now define suit to be a single character string
  // value is an integer 2 to 14 inclusive
  static propTypes = {
    suit: PropTypes.string,
    value: PropTypes.number,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }


  getCardImg(suit, value) {

    return "temp";
  }

  shouldComponentUpdate(nextState) {
    return false;
  }

  render() {
    return (
      <div className='card'>
        I am a card.

        { this.props.suit }

        { this.props.number}
        <img src={"test"} alt=" "/>
      </div>
    );
  }
}

export default Card;
