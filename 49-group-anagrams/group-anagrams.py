class Solution:
    def groupAnagrams(self, strs: list[str]) -> list[list[str]]:
        groups = {}
        for w in strs:
            key = "".join(sorted(w))
            if key not in groups:
                groups[key] = []
            groups[key].append(w)
        return list(groups.values())
