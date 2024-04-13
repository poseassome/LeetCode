/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let res = -Number.MAX_VALUE;
    let min = 1, max = 1;
    for(const x of nums){
        [min, max] = [Math.min(x, min*x, max*x), Math.max(x, min*x, max*x)];
        res = Math.max(res, max);
    }
    return res;
};