class Solution:
    def intersection(self, nums1: list[int], nums2: list[int]) -> list[int]:
        nums_set = set(nums1)
        result = set()

        for ch in nums2:
            if ch in nums_set:
                result.add(ch)

        return list(result)