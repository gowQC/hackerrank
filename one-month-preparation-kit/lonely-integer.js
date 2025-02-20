let a = [1, 2, 3, 4, 3, 2, 1];

function lonelyInteger(a) {
  for (let i = 0; i < a.length; i++) {
    if (a.length === 1) return a[0];
    let lonely = true;
    let counter = 0;
    while (lonely != false && counter < a.length) {
      // we don't want the number comparing against itself
      if (i === counter) {
        counter++;
        continue;
      }
      if (a[i] === a[counter]) {
        // if it matches with any other element, we know it's not lonely and can break the search
        lonely = false;
        break;
      }
      counter++;
    }
    if (lonely === true) return a[i];
  }
  return null;
}

console.log(lonelyInteger(a));
