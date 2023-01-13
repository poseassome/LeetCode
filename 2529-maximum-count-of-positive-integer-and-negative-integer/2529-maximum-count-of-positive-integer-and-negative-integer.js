/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
    let positive = 0;
    let negative = 0;
    let i = 0;
    while (i < nums.length) {
        if(nums[i] < 0) negative++;
        else if(nums[i] > 0) {
            positive = nums.length-i;
            break;
        }
        i++;
    }
    return Math.max(negative, positive);
};