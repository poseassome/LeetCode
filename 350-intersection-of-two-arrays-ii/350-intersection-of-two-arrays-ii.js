/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let arr = [];
    for (let i=0; i<nums2.length; i++) {
        let index = nums1.indexOf(nums2[i]);
        if (index >= 0) {
            arr.push(nums2[i]);
            nums1.splice(index, 1);
        }
    }
    return arr.sort();
};