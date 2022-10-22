/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    let target = [];
    nums.forEach((el, idx) => {
        target.splice(index[idx], 0, el);
    })
    return target;                                          
};