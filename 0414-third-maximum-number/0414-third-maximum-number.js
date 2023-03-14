/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    nums.sort((a,b) => b-a);
    const arr = Array.from(new Set(nums));
    return arr.length < 3 ? arr[0] : arr[2];
};