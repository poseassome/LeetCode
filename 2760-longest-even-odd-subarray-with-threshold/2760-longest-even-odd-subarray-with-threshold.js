/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var longestAlternatingSubarray = function(nums, threshold) {
    let res = 0;
    for(let i=0; i<nums.length; i++){
        if(nums[i]%2 !== 0 || nums[i] > threshold) continue;
        let start = i;
        while(i<nums.length && nums[i]%2 !== nums[i+1]%2 && nums[i+1] <= threshold) i++;
        res = Math.max(res, i-start+1);
    }
    return res;
};