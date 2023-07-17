/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfSquares = function(nums) {
    let sum = 0;
    nums.map((el, idx) => {
        if(nums.length%(idx+1) === 0) sum += el*el;
    })
    return sum;
};