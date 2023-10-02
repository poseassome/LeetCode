/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    let res = 0, set = new Set();
    for(let i=1; i<=k; i++) set.add(i);
    for(let i=nums.length-1; i>=0; i--){
        if(nums[i] <= k && set.has(nums[i])) set.delete(nums[i]);
        res++;
        if(set.size === 0) break;
    }
    return res;
};