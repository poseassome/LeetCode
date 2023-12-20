/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var findIntersectionValues = function(nums1, nums2) {
    const set1 = new Set(nums1), set2 = new Set(nums2);
    let a = 0, b = 0;
    for(const x of nums1){
        if(set2.has(x)) a++;
    }
    for(const x of nums2){
        if(set1.has(x)) b++;
    }
    return [a, b];
};