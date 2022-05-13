//sockMerchant --->  https://www.hackerrank.com/challenges/sock-merchant/problem?isFullScreen=true&fbclid=IwAR3VD7bvByK5Qi0NysshncX1TpMS_V_8QUab-SztGEG_uiE7860kXJSX-44
const sockMerchant = (n, arr) => {
  let totalPair = 0;

  if (n >= 1 && n <= 100) {
    for (let i = 0; i < n; i++) {
      if (arr[i] >= 1 && arr[i] <= 100 && i <= n) {
        for (let j = i + 1; j < n; j++) {
          if (arr[i] === arr[j]) {
            totalPair++;
            arr.splice(i, 1);
            arr.splice(j - 1, 1);
            i = 0;
            j = 0;
          }
        }
      }
    }
  }
  return totalPair;
};
let arr = [10, 20, 20, 10, 10, 30, 50, 10, 20, 50, 50, 50];
console.log(sockMerchant(12, arr));
