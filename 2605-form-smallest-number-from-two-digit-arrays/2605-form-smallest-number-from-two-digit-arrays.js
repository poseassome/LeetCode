/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minNumber = function(nums1, nums2) {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);
    return nums1.find(el => nums2.includes(el)) || [nums1[0], nums2[0]].sort((a, b) => a-b).join('');
};