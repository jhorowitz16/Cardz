// 'use strict';

class Deck {
  constructor(seed) {
    this.seed = seed
    const suits = ['c', 'd', 'h', 's'];
    const cards = [];
    suits.forEach((suit) => {
      var i = 2;
      while (i < 15) {
        cards.push(suit + i);
        i += 1;
      }
    });
    this.cards = cards;
  }

  shuffle() {
    
  }


  random() {
    var x = Math.sin(this.seed++) * 10000;
    const rand = x - Math.floor(x);
    console.log("seed: " + this.seed + " ==> " + rand);
  }
}

export default Deck;
