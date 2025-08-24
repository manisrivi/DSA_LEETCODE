/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(num) {
    let reverseNum = 0;

    for (let i = num; i > 0; i = Math.floor(i / 10)) {
        reverseNum = reverseNum * 10 + (i % 10); 
    }

    return reverseNum === num ? true : false;
};