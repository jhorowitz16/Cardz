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
    this.shuffle();
    this.cards = cards;
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

  random() {
    const sinSeed = Math.sin(this.counterSeed++) * 10000;
    return sinSeed - Math.floor(sinSeed);
  }

  drawCard() {
    return this.cards.pop();
  }
}

export default Deck;
