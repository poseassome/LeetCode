/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const sH = new Map();

    for(let i=0; i<nums.length; i++) {
        if (Math.abs(i-sH.get(nums[i])) <= k) return true;
        sH.set(nums[i], i);
    }
    return false;
};