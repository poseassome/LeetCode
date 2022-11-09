/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    let cnt = 0;
    for(let i=0; i<nums.length; i++){
        if(nums[i] <= nums[i-1]){
            const diff = nums[i-1]-nums[i]+1;
            cnt += diff;
            nums[i] += diff;
        }
    }
    return cnt;
};