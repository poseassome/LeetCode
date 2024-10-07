/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function(nums) {
    let res = Infinity;
    for(let x of nums){
        const sum = x.toString().split('').reduce((acc, cur) => acc+Number(cur), 0);
        res = Math.min(res, sum);
    }
    return res;
};