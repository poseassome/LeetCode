/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
    let map = new Map;
    map.set(0, -1);
    let sum = 0;
    for(let i=0; i<nums.length; i++){
        sum += nums[i];
        let n = sum%k;
        if(!map.has(n)) map.set(n, i);
        else if(i-map.get(n) > 1) return true;
    }
    return false;
};