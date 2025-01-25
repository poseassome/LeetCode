/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAdjacentDistance = function(nums) {
    const circularArr = [nums[nums.length-1], ... nums, nums[0]];
    let res = 0;
    for(let i=0; i<circularArr.length-1; i++){
        const absDiff = Math.abs(circularArr[i] - circularArr[i+1]);
        if(absDiff > res) res = absDiff;
    }
    return res;
};