/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossibleToSplit = function(nums) {
    let nums1 = [], nums2 = [];
    for(const x of nums){
        if(!nums1.includes(x)) nums1.push(x);
        else if(!nums2.includes(x)) nums2.push(x);
        else return false;
    }
    return true;
};