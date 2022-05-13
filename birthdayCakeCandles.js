//birthdayCakeCandles ---> https://www.hackerrank.com/challenges/birthday-cake-candles/problem?isFullScreen=true
const candles = [4, 4, 1, 3, 5, 5, 99, 99, 99, 99];

const birthdayCakeCandles = (candles) => {
  let count = 0;
  let max = 0;

  for (let i = 0; i < candles.length; i++) {
    max = candles[0];
    if (candles[i] >= max) {
      max = candles[i];
    }
  }

  for (let k = 0; k < candles.length; k++) {
    if (candles[k] == max) {
      count++;
    }
  }

  return count;
};

console.log(birthdayCakeCandles(candles));
