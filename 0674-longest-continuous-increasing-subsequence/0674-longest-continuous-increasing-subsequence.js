/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    if(nums.length === 0) return 0;
    let cnt = 1, max = 1;
    for(let i=0; i<nums.length; i++){
        if(nums[i]<nums[i+1]){
            cnt++;
            max = Math.max(cnt, max);
        } else cnt = 1;
    }
    return max;
};