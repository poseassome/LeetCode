/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var hasIncreasingSubarrays = function(nums, k) {
    let left = 0, right = k;
    let prevL = nums[left], prevR = nums[right];
    let cnt = 0;
    for(let i=1; i<nums.length; i++){
        if(cnt === k-1) return true;
        const curL = nums[i+left];
        const curR = nums[i+right];
        if(curL > prevL && curR > prevR) cnt++;
        else cnt = 0;
        prevL = curL;
        prevR = curR;
    }
    return false;
};