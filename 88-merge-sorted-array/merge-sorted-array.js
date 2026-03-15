/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    
    // First I take the copy of nums 1 and use slice the array
    let nums1Copy = nums1.slice(0, m);
    
    // use two pointers
    let p1 = 0;
    let p2 = 0;

    // use for loop to traverse array
    for (let i=0; i < m+n; i++) {
        // check the condition based on sorted 
        if (p2 >= n || (p1 < m && nums1Copy[p1] < nums2[p2])) {
            nums1[i] = nums1Copy[p1];
            p1++;
        } else {
            nums1[i] = nums2[p2];
            p2++
        }

    }

};