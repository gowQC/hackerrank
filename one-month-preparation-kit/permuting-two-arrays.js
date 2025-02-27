let queries = 3;
let A = [0, 1, 5, 4, 3];
let B = [0, 2, 4, 1, 1];

function twoArrays(k, A, B) {
  // create new A and B arrays such that at index i, A[i] and B[i] will be >= k

  A.sort(function (a, b) {
    // sorted from least to greatest
    return a - b;
  });
  B.sort(function (a, b) {
    // sorted from greatest to least
    return b - a;
  });

  // check if every index of i proves A[i] + B[i] >= k is always true
  // arrays A and B are assumed of same length
  for (let i = 0; i < A.length; i++) {
    if (A[i] + B[i] < k) {
      return "NO";
    }
  }

  return "YES";
}

console.log(twoArrays(queries, A, B));
