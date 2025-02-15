/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    if(k <= 0) return 0;
    let res = 0;
    for(let i=0; i<nums.length; i++){
        let acc = 1;
        for(let j=i; j<nums.length; j++){
            acc *= nums[j];
            if(acc < k) res++;
            if(acc >= k) break;
        }
    }
    return res;
};