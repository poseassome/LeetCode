/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function(nums) {
    const even = nums.filter(num => num%6 === 0);
    return even.length > 0 ? even.reduce((acc, cur) => acc+cur)/even.length | 0 : 0;
};