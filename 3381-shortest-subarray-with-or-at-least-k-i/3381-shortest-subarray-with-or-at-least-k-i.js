/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumSubarrayLength = function(nums, k) {
    let min = Infinity;
    for(let i=0; i<nums.length; i++){
        let res = nums[i];
        for(let j=i; j<nums.length; j++){
            res |= nums[j];
            if(res >= k && min > j-i+1) min = j-i+1;
        }
    }
    return min === Infinity ? -1 : min;
};