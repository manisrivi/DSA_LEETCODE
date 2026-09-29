/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let map = new Map();
    map.set(0,1);
    let count = 0;
    let sum = 0;
    for (let i=0; i<nums.length; i++) {
        sum += nums[i];
        let need = sum - k;
        if (map.has(need)) {
            count += map.get(need)
        }
        map.set(sum, (map.get(sum)||0) + 1)
    }
    return count;
};
