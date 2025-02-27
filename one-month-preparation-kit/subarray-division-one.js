size = [2, 5, 1, 3, 4, 4, 3, 5, 1, 1, 2, 1, 4, 1, 3, 3, 4, 2, 1];
day = 18; // what sum needs to equal
month = 7; // length of subarray

function birthday(s, d, m) {
  let answer = 0;

  // base case - if the month equals the arrays size
  if (s.length === m) {
    let sum = 0;
    for (let i = 0; i < s.length; i++) {
      sum += s[i];
    }
    if (sum === d) {
      return 1;
    } else return 0;
  }
  // search for s.length - m because we don't want to search for an index that doesn't exist
  for (let i = 0; i < s.length - m + 1; i++) {
    let k = 0;
    let sum = 0;
    while (k < m) {
      sum += s[k + i];
      k++;
    }
    if (sum === d) {
      answer++;
    }
  }
  return answer;
}

console.log(birthday(size, day, month));
