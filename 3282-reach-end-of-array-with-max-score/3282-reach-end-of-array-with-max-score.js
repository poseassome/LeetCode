/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumScore = function(nums) {
    let curIdx = 0, sum = 0, i = 0;
    while(i < nums.length){
        if(nums[i] > nums[curIdx] || i === nums.length-1){
            sum += (i-curIdx)*nums[curIdx];
            curIdx = i;
        }
        i++;
    }
    return sum;
};