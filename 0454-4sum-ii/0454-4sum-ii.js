/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function(nums1, nums2, nums3, nums4) {
    const map = new Map();
    let cnt = 0;
    for(const a of nums1){
        for(const b of nums2){
            map.set(a+b, (map.get(a+b) || 0) +1);
        }
    }
    for(const c of nums3){
        for(const d of nums4){
            if(map.has(-c-d)) cnt += map.get(-c-d);
        }
    }
    return cnt;
};