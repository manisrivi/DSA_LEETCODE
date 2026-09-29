/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
     if (!s.length) return -1;

  const map = new Map();

  for (let i=0; i<s.length; i++) {
    const char = s[i];
    map.set(char, (map.get(char)|| 0 ) +1);
  }

  for (let i=0; i<s.length; i++) {
    if (map.get(s[i]) === 1) {
      return i
    }
  }

  return -1
};