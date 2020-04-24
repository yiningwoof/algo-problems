var mergeTwoLists = function (l1, l2) {
  let merged = [];
  while (l1[0] && l2[0]) {
    if (l1[0] <= l2[0]) {
      merged.push(l1[0]);
      l1.shift();
    } else if (l1[0] > l2[0]) {
      merged.push(l2[0]);
      l2.shift();
    }
  }
  if (l1.length !== 0) {
    merged = merged.concat(l1);
  } else if (l2.length !== 0) {
    merged = merged.concat(l2);
  }
  return merged;
};

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));
