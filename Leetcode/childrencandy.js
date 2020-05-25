var kidsWithCandies = function (candies, extraCandies) {
  // Use array reduce to get the maximum value in this array
  const kidWithTheMostCandy = candies.reduce((accumulator, currentValue) => {
    return currentValue > accumulator ? currentValue : accumulator;
  });

  //go through the entire array and compare each value with the value returned above
  return candies.map(
    (kidsCandy) => kidsCandy + extraCandies >= kidWithTheMostCandy
  );
};

kidsWithCandies([2, 3, 5, 1, 3], 3);
