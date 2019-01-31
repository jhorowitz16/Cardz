import React, { Component } from 'react';
import Card from './Card.jsx'
import '../css/hand.css';

class App extends Component {
  render() {
    return (
      <div className="hand">
          <Card suit="clubs" number="2"/>
          <Card/>
          <Card/>
      </div>
    );
  }
}

export default App;
