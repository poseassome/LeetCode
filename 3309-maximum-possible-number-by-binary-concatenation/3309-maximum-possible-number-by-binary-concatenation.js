/**
 * @param {number[]} nums
 * @return {number}
 */
var maxGoodNumber = function(nums) {
    const num1binary = nums[0].toString(2);
    const num2binary = nums[1].toString(2);
    const num3binary = nums[2].toString(2);
    const arr = [
        num1binary + num2binary + num3binary,
        num1binary + num3binary + num2binary,
        num2binary + num1binary + num3binary,
        num2binary + num3binary + num1binary,
        num3binary + num1binary + num2binary,
        num3binary + num2binary + num1binary
    ]
    return Math.max(...arr.map(el => parseInt(el, 2)));
};