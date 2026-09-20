/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const count = new Map();

  for (let i = 0; i < nums.length; i++) {
    const newCount = (count.get(nums[i]) || 0) + 1;

    count.set(nums[i], newCount);

    if (newCount > nums.length / 2) {
      return nums[i];
    }
  }

  return 0;
};
