/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function(nums) {
    return nums.map((el, idx) => el[idx] === '0' ? '1' : '0').join('');
};