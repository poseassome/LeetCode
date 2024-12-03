/**
 * @param {number[]} nums
 * @param {number} l
 * @param {number} r
 * @return {number}
 */
var minimumSumSubarray = function(nums, l, r) {
    const len = nums.length;
    let res = Infinity;
    for(let i=0; i<len; i++){
        let cur = 0;
        for(let j=i; j<len; j++){
            cur += nums[j];
            const n = j-i+1;
            if(n > r) break;
            if(n >= l && cur >0) res = Math.min(res, cur);
        }
    }
    return res === Infinity ? -1 : res;
};