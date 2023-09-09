/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function(nums1, nums2) {
    let obj = {}, arr = [];
    for(let i=0; i<nums1.length; i++){
        obj[nums1[i][0]] = obj[nums1[i][0]] ? obj[nums1[i][0]]+nums1[i][1] : nums1[i][1];
    }
    for(let i=0; i<nums2.length; i++){
        obj[nums2[i][0]] = obj[nums2[i][0]] ? obj[nums2[i][0]]+nums2[i][1] : nums2[i][1];
    }
    Object.keys(obj).map(el => {
        arr.push([el, obj[el]]);
    });
    return arr;
};