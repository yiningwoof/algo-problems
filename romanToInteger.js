var romanToInt = function (s) {
  let map = new Map();
  map.set("I", 1);
  map.set("V", 5);
  map.set("X", 10);
  map.set("L", 50);
  map.set("C", 100);
  map.set("D", 500);
  map.set("M", 1000);

  let i = 0;
  let sum = 0;
  while (i < s.length) {
    let cur = map.get(s[i]);
    let next = map.get(s[i + 1]) ? map.get(s[i + 1]) : 0;
    sum = cur >= next ? sum + cur : sum - cur;
    i++;
  }
  return sum;
};

console.log(romanToInt("MCMXCIV"));
