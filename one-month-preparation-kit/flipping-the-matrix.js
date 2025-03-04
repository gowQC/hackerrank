let myMatrix = [
  [112, 42, 83, 119],
  [56, 125, 56, 49],
  [15, 78, 101, 43],
  [62, 98, 114, 108],
];

function flippingMatrix(matrix) {
  /**
   * The goal is to maximize the sum of the elements in the n x n submatrix, located in the upper-left quadrant of the matrix (Quadrant 2).
   * The logic of my program is to maximize the sum of the adjacent sub-matrices (Quadrants 1 and 3) using the integers from the bottom right quadrant (Quadrant 4).
   * We can only reverse rows and columns to accomplish this maximization.
   * Once Quadrants 1 and 3 are maximized, then we can filter the greatest values from Quadrants 1 and 3 into Quadrant 2 for the end result.
   * Once all elements are placed in Quadrant 2, we return the sum of that quadrant's integers.
   */

  // compares columns in Q1 and Q4
  for (let i = matrix.length / 2; i < matrix.length; i++) {
    let innerSum = 0;
    let outerSum = 0;
    for (let j = 0; j < matrix.length; j++) {
      if (j < matrix.length / 2) {
        innerSum = innerSum + matrix[j][i];
      } else {
        outerSum = outerSum + matrix[j][i];
      }
    }

    // if outSum is greater, then we flip the column
    if (outerSum > innerSum) {
      for (let j = 0; j < matrix.length / 2; j++) {
        let temp = matrix[j][i]; // 0,0 address' value is stored
        matrix[j][i] = matrix[Math.abs(j - matrix.length + 1)][i]; // 0,0 address is overwritten with 0,3 value
        matrix[Math.abs(j - matrix.length + 1)][i] = temp; // 0,3 address is overwritten with temp value
      }
    }
  }

  // compares rows in Q3 and Q4
  for (let i = matrix.length / 2; i < matrix.length; i++) {
    let innerSum = 0;
    let outerSum = 0;
    for (let j = 0; j < matrix.length; j++) {
      if (j < matrix.length / 2) {
        innerSum = innerSum + matrix[i][j];
      } else {
        outerSum = outerSum + matrix[i][j];
      }
    }

    // if outerSum is greater, then we flip the row
    if (outerSum > innerSum) {
      matrix[i].reverse();
    }
  }

  // compares columns in Q2 and Q3
  for (let i = 0; i < matrix.length / 2; i++) {
    let innerSum = 0;
    let outerSum = 0;
    for (let j = 0; j < matrix.length; j++) {
      if (j < matrix.length / 2) {
        innerSum = innerSum + matrix[j][i];
      } else {
        outerSum = outerSum + matrix[j][i];
      }
    }

    // if outSum is greater, then we flip the column
    if (outerSum > innerSum) {
      for (let j = 0; j < matrix.length / 2; j++) {
        let temp = matrix[j][i]; // 0,0 address' value is stored
        matrix[j][i] = matrix[Math.abs(j - matrix.length + 1)][i]; // 0,0 address is overwritten with 0,3 value
        matrix[Math.abs(j - matrix.length + 1)][i] = temp; // 0,3 address is overwritten with temp value
      }
    }
  }

  // compare rows in Q2 and Q1
  for (let i = 0; i < matrix.length / 2; i++) {
    let innerSum = 0;
    let outerSum = 0;
    for (let j = 0; j < matrix.length; j++) {
      if (j < matrix.length / 2) {
        innerSum = innerSum + matrix[i][j];
      } else {
        outerSum = outerSum + matrix[i][j];
      }
    }

    // if outerSum is greater, then we flip the row
    if (outerSum > innerSum) {
      matrix[i].reverse();
    }
  }

  // matrix is restructured, now print the sum of Q2
  let sum = 0;
  for (let i = 0; i < matrix.length / 2; i++) {
    for (let j = 0; j < matrix.length / 2; j++) {
      sum = sum + matrix[i][j];
    }
  }

  return sum;
}

console.log(flippingMatrix(myMatrix));
