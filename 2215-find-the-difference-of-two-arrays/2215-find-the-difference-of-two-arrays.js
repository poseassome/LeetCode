/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    return [[...new Set(nums1)].filter(el => !nums2.includes(el)), [...new Set(nums2)].filter(el => !nums1.includes(el))];
};