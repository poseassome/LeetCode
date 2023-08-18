/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSum = function(nums) {
    const maxNum = num => {
        let temp = (num+'').split('').map(Number);
        return Math.max(...temp)
    }
    
    let len = nums.length, res = -1;
    for(let i=0; i<len; i++){
        for(let j=i+1; j<len; j++){
            if(maxNum(nums[i]) === maxNum(nums[j])) res = Math.max(res, nums[i]+nums[j]);
        }
    }
    return res;
};