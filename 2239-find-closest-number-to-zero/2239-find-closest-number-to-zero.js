/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function(nums) {
    nums.sort((a,b) => a-b);
    let min = Infinity;
    let close;
    for(const x of nums){
        if(Math.abs(x) <= min){
            min = Math.abs(x);
            close = x;
        }
    }
    return close;
};