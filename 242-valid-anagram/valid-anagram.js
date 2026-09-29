/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
    return false
  } 

  const sMap = new Map();
  const tMap = new Map();

  for (let i=0; i<s.length; i++) {
    const char = s[i];
    sMap.set(char, (sMap.get(char) || 0) + 1)
  }

  for (let j=0; j<t.length; j++) {
    const char = t[j];
    tMap.set(char,  (tMap.get(char) || 0) +1)
  }

   for (let [char, count] of sMap) {
     if (tMap.get(char) !== count) {
       return false
     }
   }
  return true
};