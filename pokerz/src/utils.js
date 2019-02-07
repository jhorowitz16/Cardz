export function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

export function charToSuit(char) {
  switch (char) {
    case 'c':
      return 'clubs';
    case 'd':
      return 'diamonds';
    case 'h':
      return 'hearts';
    case 's':
      return 'spades';
    default:
      return '';
  }
}

// convert a value to the text that appears in the filename
export function valueToString(value) {
  switch (value) {
    case 11:
      return 'jack';
    case 12:
      return 'queen';
    case 13:
      return 'king';
    case 14:
      return 'ace';
    default:
      return value.toString();
  }
}

// convert a value to the string the solver wants
export function valueToShortString(value) {
  switch (value) {
    case 10:
      return 'T';
    case 11:
      return 'J';
    case 12:
      return 'Q';
    case 13:
      return 'K';
    case 14:
      return 'A';
    default:
      return value.toString();
  }
}

export function encodeCards(hand) {
  return hand.map((card) => {
      const value = valueToShortString(card[1]);
      const suit = card[0];
      return value + suit;
    });
}

// feed into poker solver from a hand object
export function scoreHand(hand, community) {
  const combined = hand.concat(community);
  const solver = require('pokersolver').Hand;
  const toSolveArray = encodeCards(combined);
  return solver.solve(toSolveArray);
}

export function resolveGame(handOne, handTwo, community) {
  const solver = require('pokersolver').Hand;
  const solvedOne = solver.solve(encodeCards(handOne.concat(community)));
  const solvedTwo = solver.solve(encodeCards(handTwo.concat(community)));
  const winner = solver.winners([solvedOne, solvedTwo]);
  debugger;
  alert(winner);
}
