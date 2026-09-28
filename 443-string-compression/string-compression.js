/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
  let result = "";
  let count = 1;

  for (let i = 1; i <= chars.length; i++) {
    if (chars[i] === chars[i - 1]) {
      count++;
    } else {
      result = result + chars[i - 1] + (count > 1 ? count : "");
      count = 1;
    }
  }

  for (let j = 0; j < result.length; j++) {
    chars[j] = result[j]; 
  }
  return result.length;

};