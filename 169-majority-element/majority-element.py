class Solution:
    def majorityElement(self, nums: list[int]) -> int:
        nums_map = {}
        half = len(nums) // 2

        for n in nums:
            nums_map[n] = nums_map.get(n, 0) + 1
            if nums_map[n] > half:
                return n