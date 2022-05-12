//howManyGames ---->https://www.hackerrank.com/challenges/halloween-sale/problem?isFullScreen=true

const howManyGames = (p, d, m, s) => {
  let result = s;
  let count = 0;
  result = result - p;
  count++;
  do {
    p = p - d;
    count++;
    result = result - p;
  } while (result > m);

  return count;
};

console.log(howManyGames(20, 3, 6, 80));
