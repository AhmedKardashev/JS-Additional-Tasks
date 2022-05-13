//howManyGames ---->https://www.hackerrank.com/challenges/halloween-sale/problem?isFullScreen=true

const howManyGames = (p, d, m, s) => {
  if (s >= p) {
    let budget = s;
    let count = 0;
    let price = p;

    while (price >= m) {
      budget -= price;
      count++;
      price -= d;
      if (budget <= price) break;
    }

    while (budget >= m) {
      count++;
      budget -= m;
    }
    return count;
  }
};
console.log(howManyGames(20, 3, 6, 20));
