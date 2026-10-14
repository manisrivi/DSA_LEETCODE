def get_shape(word):
  labels = {}
  shape = []

  for ch in word:
    if ch not in labels:
      labels[ch] = len(labels)
    shape.append(labels[ch])

  return shape

class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
        return get_shape(s) == get_shape(t)





