//I tried using binary search initially
/** count-negative-numbers-in-a-sorted-matrix
 * @param {number[][]} grid
 * @return {number}
 */
let countNegatives = function (grid) {
  let sum = 0;

  grid.forEach(function (arr) {
    sum += getNumberOfNegativeNumbers(arr);
  });

  return sum;
};

let getNumberOfNegativeNumbers = function (arr) {
  let left = 0;
  let right = arr.length - 1;
  let arrayLength = arr.length;
  let ans = 0;

  while (left <= right) {
    let middle = Math.floor(left + (right - left) / 2);
    let currentNumber = arr[middle];

    if (currentNumber < 0) {
      ans = arrayLength - middle;
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return ans;
};

//Anohter interesting solution
/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {
  let numberOfRows = grid.length;
  let numberOfColumns = grid[0].length;

  let i = 0;
  let j = 0;
  let numberOfNegatives = 0;

  //i<=numberOfRows-1 means we don't want to exceed the number of rows.
  // Since it's 0 index, that's why we are subtracting 1.
  // J starts from the right, so we don't want to go outside the box and exceed number of columns

  while (i <= numberOfRows - 1 && j <= numberOfColumns) {
    if (grid[i][j] >= 0) {
      j++;
    } else {
      numberOfNegatives += numberOfColumns - j;
      i++;
      j = 0;
    }
  }
  return numberOfNegatives;
};
