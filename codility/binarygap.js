function solution(value) {
  let binaryArray = value.toString(2).split('');

  let start = 0;
  let end = 0;
  let numberOfOnes = 0;
  let binaryGap;
  let binaryGaps = [];

  for (let i = 0; i < binaryArray.length; i++) {
    if (binaryArray[i] == 0) {
      continue;
    }

    if (binaryArray[i] == 1 && numberOfOnes == 0) {
      start = i;
      numberOfOnes++;
    } else {
      end = i;
      binaryGap = end - start - 1;
      binaryGaps.push(binaryGap);
      start = i;
      numberOfOnes++;
    }
  }
  console.log(Math.max(...binaryGaps));
}

solution(529);
