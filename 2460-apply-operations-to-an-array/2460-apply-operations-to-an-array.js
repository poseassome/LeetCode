/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function(nums) {
    nums.forEach((el, idx) => {
        if(nums[idx] === nums[idx+1]){
            nums[idx] *= 2;
            nums[idx+1] = 0;
        };
    });
    return [...nums.filter(el => el !== 0), ...nums.filter(el => el === 0)];
};