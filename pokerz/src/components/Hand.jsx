import React, { Component } from 'react';
import Card from './Card.jsx'
import '../css/hand.css';

class App extends Component {
  render() {
    return (
      <div className="hand">
          <Card suit="c" value={2}/>
          <Card suit="d" value={11}/>
          <Card suit="s" value={13}/>
      </div>
    );
  }
}

export default App;
