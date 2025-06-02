/**
 * @param {number[]} nums
 * @return {number}
 */
var reductionOperations = function(nums) {
    nums = nums.sort((a,b) => a-b);
    let step = 0, cnt = 0, cur = nums[0]; 
    for(const x of nums){
        if(x === cur) cnt += step;
        else {
            step++;
            cnt += step;
            cur = x;
        }
    }
    return cnt;
};