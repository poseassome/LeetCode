/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    let answer = [];
    nums.forEach(el => answer[el] = nums[nums[el]]);
    return answer;
};