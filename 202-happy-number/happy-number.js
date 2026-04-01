/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n, seen = new Set()) {

    if (seen.has(n)) return false;

    if (n === 1) return true;

    seen.add(n);

    const digits = n.toString().split('');

    const sum = digits.reduce((s, d) => s + Math.pow(Number(d), 2), 0);

    return isHappy(sum, seen);  

};