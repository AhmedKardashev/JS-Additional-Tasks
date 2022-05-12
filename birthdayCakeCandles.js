//birthdayCakeCandles ---> https://www.hackerrank.com/challenges/birthday-cake-candles/problem?isFullScreen=true
const candles = [4, 4, 1, 3];
const birthdayCakeCandles = (candles) => {
  let count = 0;
  for (let i = 0; i < candles.length; i++) {
    let max = candles[0];

    if (candles[i] >= max) {
      max = candles[i];
      count++;
    }
  }
  return count;
};

console.log(birthdayCakeCandles(candles));
