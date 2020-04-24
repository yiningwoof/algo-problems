var maxProfit = function (prices) {
  let minPrice = prices[0];
  let maxProf = 0;
  for (let i = 0; i < prices.length; i++) {
    minPrice = Math.min(minPrice, prices[i]);
    maxProf = Math.max(maxProf, prices[i] - minPrice);
  }
  return maxProf;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
