const array = [4, 4, 1, 1, 1];

function miniMaxSum(arr) {
  // sort array first - comparison function allows us to not sort alphabetically, but rather numerically
  arr.sort(function (a, b) {
    return a - b;
  });
  // given our expectation for an array with a length of 5, we can call by index once the array is sorted
  console.log(
    arr[0] +
      arr[1] +
      arr[2] +
      arr[3] +
      " " +
      (arr[1] + arr[2] + arr[3] + arr[4])
  );
}

miniMaxSum(array);
