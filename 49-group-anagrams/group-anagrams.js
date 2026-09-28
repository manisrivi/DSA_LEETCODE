/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  
  const map = new Map();
  for (let i=0; i<strs.length; i++) {
    const word = strs[i];
    const key = word.split('').sort().join();
    if (!map.has(key)) {
        map.set(key, [])
    }
    map.get(key).push(word)
  }
    return [...map.values()]
};

