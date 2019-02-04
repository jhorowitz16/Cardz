// 'use strict';

class Deck {
  constructor(seed) {
    this.originalSeed = seed;
    this.counterSeed = seed
    const suits = ['c', 'd', 'h', 's'];
    const cards = [];
    suits.forEach((suit) => {
      var i = 2;
      while (i < 15) {
        cards.push([suit, i]);
        i += 1;
      }
    });
    this.cards = cards;
    console.log("before shuffling: " + this.cards);
    this.shuffle();
    this.cards = cards;
    console.log("after shuffling: " + this.cards);
  }

  shuffle() {
    const deck = this.cards;
    let m = deck.length, i;
    while (m) {
      i = Math.floor(this.random() * m--);
      [deck[m], deck[i]] = [deck[i], deck[m]];
    }
    this.cards = deck;
  }

  /*
  first cards for seed 1 should be:
    d5,d9,c9,c14,s3,h10
  */

  random() {
    const sinSeed = Math.sin(this.counterSeed++) * 10000;
    return sinSeed - Math.floor(sinSeed);
  }

  drawCard() {
    const card = this.cards.pop();
    debugger;
    return card;
  }
}

export default Deck;
