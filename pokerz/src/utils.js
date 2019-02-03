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
