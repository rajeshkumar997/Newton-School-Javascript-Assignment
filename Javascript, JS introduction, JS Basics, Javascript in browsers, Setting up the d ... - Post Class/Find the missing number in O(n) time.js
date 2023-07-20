function findMissingNumber(arrayOfIntegers, upperBound, lowerBound) {
  // write code here
  // use console.log for output
  var sumOfIntegers = 0;
  for (var i = 0; i < arrayOfIntegers.length; i++) {
    sumOfIntegers += arrayOfIntegers[i];
  }
  upperLimitSum = (upperBound * (upperBound + 1)) / 2;
  lowerLimitSum = (lowerBound * (lowerBound - 1)) / 2;
  theoreticalSum = upperLimitSum - lowerLimitSum;

  console.log(theoreticalSum - sumOfIntegers);
}
