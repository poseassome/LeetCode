/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfEncryptedInt = function(nums) {
    return nums.map(num => {
        let max = Math.max(...num.toString().split(''));
        return Number(max.toString().repeat(num.toString().length));
    }).reduce((acc, cur) => acc+cur, 0);
};