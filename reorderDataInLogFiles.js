var reorderLogFiles = function (logs) {
  const body = (s) => s.slice(s.indexOf(" ") + 1);
  const isNum = (c) => /\d/.test(c);
  const compare = (a, b) => {
    let n = body(a).localeCompare(body(b));
    if (n !== 0) {
      return n;
    } else {
      return a.localeCompare(b);
    }
  };

  let letterLogs = [];
  let digitLogs = [];
  for (const log of logs) {
    if (isNum(body(log))) digitLogs.push(log);
    else letterLogs.push(log);
    console.log("letterLogs", letterLogs);
    console.log("digitLogs", digitLogs);
  }
  return [...letterLogs.sort(compare), ...digitLogs];
};

console.log(
  reorderLogFiles([
    "dig1 8 1 5 1",
    "let1 art can",
    "dig2 3 6",
    "let2 own kit dig",
    "let3 art zero",
  ])
);
