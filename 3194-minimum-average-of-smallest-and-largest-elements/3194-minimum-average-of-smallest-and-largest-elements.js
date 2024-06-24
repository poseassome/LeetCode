/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverage = function(nums) {
    nums.sort((a,b) => a-b);
    let min = Infinity;
    while(nums.length){
        let minEle = nums.shift();
        let maxEle = nums.pop();
        min = Math.min(min, (minEle+maxEle)/2);
    }
    return min;
};