myArray = [3, 2, 1, 5, 4];

function findMedian(arr) {
  arr.sort((a, b) => {
    return a - b;
  });
  return arr[Math.floor(arr.length / 2)];
}

console.log(findMedian(myArray));
