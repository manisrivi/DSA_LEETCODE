/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const count = new Map();

    for (let i = 0; i < nums.length; i++) {
        count.set(nums[i], (count.get(nums[i]) || 0) + 1);
    }

    const arr = [...count];

    arr.sort((a, b) => b[1] - a[1]);

    return arr.slice(0, k).map((item) => item[0]);
};