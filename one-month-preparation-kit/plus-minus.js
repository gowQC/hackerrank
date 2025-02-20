const array = [-1, -2, 3, 4, 0];

function plusMinus(arr) {
  let positive = 0;
  let negative = 0;
  let zero = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 1) {
      // if positive
      positive++;
    } else if (arr[i] === 0) {
      // if = 0
      zero++;
    } else {
      // if negative - last case it could be
      negative++;
    }
  }
  console.log(
    (positive / arr.length).toFixed(6) +
      "\n" +
      (negative / arr.length).toFixed(6) +
      "\n" +
      (zero / arr.length).toFixed(6)
  );
}

plusMinus(array);
