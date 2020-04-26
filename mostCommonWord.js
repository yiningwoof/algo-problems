var mostCommonWord = function (paragraph, banned) {
  let splitedNoPunc = paragraph.replace(/[^\w\s]/g, "").split(" ");
  const map = new Map();
  banned.forEach((word) => map.set(word.toLowerCase(), false));
  console.log(map);
  let curMax = 0;
  let maxWord;
  for (let i = 0; i < splitedNoPunc.length; i++) {
    let lowerWord = splitedNoPunc[i].toLowerCase();
    if (map.has(lowerWord) && map.get(lowerWord) === false) {
      continue;
    } else if (map.has(lowerWord) && map.get(lowerWord) !== false) {
      map.set(lowerWord, map.get(lowerWord) + 1);
    } else {
      map.set(lowerWord, 1);
    }
    if (map.get(lowerWord) > curMax) {
      curMax = map.get(lowerWord);
      maxWord = lowerWord;
    }
  }
  console.log(map);
  return maxWord;
};

console.log(
  mostCommonWord("Bob hit a ball, the hit BALL flew far after it was hit.", [
    "hit",
  ])
);
