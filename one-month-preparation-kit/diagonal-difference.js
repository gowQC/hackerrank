let array = [[3], [11, 2, 4], [4, 5, 6], [10, 8, -12]];

function diagonalDifference(arr) {
  let length = arr[0][0];
  let diag1 = 0;
  let diag2 = 0;
  for (let i = 1; i <= length; i++) {
    diag1 += arr[i][i - 1];
  }
  for (let i = length; i >= 1; i--) {
    diag2 += arr[Math.abs(i - length - 1)][i - 1];
  }
  return Math.abs(diag1 - diag2);
}
// this iteration works if the first array of 2d array is omitted
// function diagonalDifference(arr) {
//     let diag1 = 0;
//     let diag2 = 0;
//     for (let i = 0; i < arr.length; i++) {
//       diag1 += arr[i][i];
//       diag2 += arr[i][Math.abs(i - arr.length + 1)];
//     }

//     return Math.abs(diag1 - diag2);
//   }

console.log(diagonalDifference(array));
