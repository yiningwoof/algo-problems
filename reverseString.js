var reverseString = function (s) {
  //   for (let i = 0; i < s.length; i++) {
  //     let l = s[i];
  //     s.splice(i, 1);
  //     s.unshift(l);
  //   }
  //   return s;

  let temp;
  for (let i = 0; i < s.length / 2; i++) {
    temp = s[i];
    s[i] = s[s.length - i - 1];
    s[s.length - i - 1] = temp;
  }
  return s;
};

console.log(reverseString(["h", "e", "l", "l", "o"]));
