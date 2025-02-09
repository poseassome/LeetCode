/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let num1 = Infinity, num2 = Infinity;
    for(let i=0; i<nums.length; i++){
        if(nums[i] > num2 && num2 > num1) return true;
        if(nums[i] > num1) num2 = nums[i];
        else num1 = nums[i];
    }
    return false;
};