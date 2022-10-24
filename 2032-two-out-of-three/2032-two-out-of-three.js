/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function(nums1, nums2, nums3) {
    const arr = [];
    let set1 = new Set(nums1),
        set2 = new Set(nums2),
        set3 = new Set(nums3);
    let allSet = new Set(nums1.concat(nums2).concat(nums3));
    allSet.forEach(el => {
        if((set1.has(el)+set2.has(el)+set3.has(el)) >= 2) arr.push(el);
    })
    return arr;
};