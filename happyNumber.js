var isHappy = function (n, hist = {}) {
  let digits = n.toString().split("");
  let sum = digits.reduce((s, d) => s + Math.pow(d, 2), 0);
  console.log(sum);
  console.log(hist);
  if (sum === 1) return true;
  if (hist.hasOwnProperty(sum)) return false;
  else {
    hist[sum] = sum;
    return isHappy(sum, hist);
  }
};

console.log(isHappy(19));
