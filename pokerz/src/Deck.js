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


  random() {
    var x = Math.sin(this.seed++) * 10000;
    const rand = x - Math.floor(x);
    console.log("seed: " + this.seed + " ==> " + rand);
    return rand;
  }
}

export default Deck;
