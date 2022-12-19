/**
 * @param {number[]} nums
 * @return {number}
 */
var distinctAverages = function(nums) {
    let avg = new Set();
    nums.sort((a,b) => a-b);
    while(nums.length > 1){
        const remove = [nums.shift(), nums.pop()];
        avg.add((remove[0]+remove[1])/2);
    }
    return avg.size;
};