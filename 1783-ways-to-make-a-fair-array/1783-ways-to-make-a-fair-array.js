/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToMakeFair = function(nums) {
    let res = 0;
    let leftEven = 0, leftOdd = 0;
    let rightEven = 0, rightOdd = 0;
    
    for(let i=0; i<nums.length; i++){
        if(i%2 === 0) rightEven += nums[i]; 
        else rightOdd += nums[i]; 
    }
    for(let i=0; i<nums.length; i++){
        if(i%2 === 0) rightEven -= nums[i]; 
        else rightOdd -= nums[i];
        if(rightEven+leftOdd === rightOdd+leftEven) res++;
        if(i%2 === 0) leftEven += nums[i]; 
        else leftOdd += nums[i]; 
    }
    return res;
};