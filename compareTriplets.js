// compareTriplets --->  https://www.hackerrank.com/challenges/compare-the-triplets/problem?isFullScreen=tru
let arrayAlice = [1, 2, 3];
let arrayBob = [3, 2, 1];

const compareTriplets = (a, b) => {
  const counters = {
    counterAllice: 0,
    counterBob: 0,
  };

  for (let i = 0; i < a.length, i < b.length; i++) {
    if (a[i] > b[i]) {
      counters.counterAllice++;
    } else if (b[i] > a[i]) {
      counters.counterBob++;
    }
  }
  const result = Object.values(counters);

  return result;
};

console.log(compareTriplets(arrayAlice, arrayBob));
