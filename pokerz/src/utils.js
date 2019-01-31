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
