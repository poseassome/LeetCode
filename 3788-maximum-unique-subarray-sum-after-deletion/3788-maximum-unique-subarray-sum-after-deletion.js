/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSum = function(nums) {
    const set = new Set();
    let sum = 0, max = nums[0];
    for(const x of nums){
        if(x > 0 && !set.has(x)){
            set.add(x);
            sum += x;
        }
        if(x > max) max = x;
    }
    if(sum === 0) return max;
    return sum;
};