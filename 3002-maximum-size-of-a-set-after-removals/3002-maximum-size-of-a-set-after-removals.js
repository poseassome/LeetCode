/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maximumSetSize = function(nums1, nums2) {
    const set1 = new Set(nums1), set2 = new Set(nums2);
    let eq = 0;
    for(const x of set1){
        if(set2.has(x)) eq++;
    }
    const [len1, len2] = set1.size < set2.size ? [set1.size, set2.size] : [set2.size, set1.size];
    const halfLen = nums1.length/2;
    return Math.min(len2 - Math.max(0, eq-Math.max(0, len1-halfLen)), halfLen) + Math.min(len1, halfLen);
};