let array = [1, 1, 3, 2, 1];

function countingSort(arr) {
  // create array of 100 0's
  let newArray = [];
  for (let i = 0; i < 100; i++) {
    newArray.push(0);
  }

  // incremenet indexes of new array according to original array's values
  for (let i = 0; i < arr.length; i++) {
    newArray[arr[i]]++;
  }

  return newArray;
}

console.log(countingSort(array));
