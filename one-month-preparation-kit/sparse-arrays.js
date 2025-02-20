let myStrings = ["aba", "baba", "aba", "xzxb"];
let myQueries = ["aba", "xzxb", "ab"];

function matchingStrings(strings, queries) {
  const total = [];
  for (let i = 0; i < queries.length; i++) {
    let number = 0;
    for (let j = 0; j < strings.length; j++) {
      if (queries[i] === strings[j]) {
        number++;
      }
    }
    total.push(number);
  }
  return total;
}

console.log(matchingStrings(myStrings, myQueries));
