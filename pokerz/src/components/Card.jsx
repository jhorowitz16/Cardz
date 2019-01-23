import React, {Component} from 'react';
import '../css/card.css'

class Card extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  shouldComponentUpdate(nextState) {
    return false;
  }

  render() {
    return (
      <div className='card'>
        I am a card.
      </div>
    );
  }
}

export default Card;
