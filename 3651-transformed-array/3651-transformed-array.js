/**
 * @param {number[]} nums
 * @return {number[]}
 */
var constructTransformedArray = function(nums) {
    let res = [];
    for(let i=0; i<nums.length; i++){
        let eleIdx = (Math.abs(i) + nums[i])%nums.length;
        eleIdx = eleIdx < 0 ? nums.length - Math.abs(eleIdx) : eleIdx;
        res.push(nums[eleIdx]);
    }
    return res;
};