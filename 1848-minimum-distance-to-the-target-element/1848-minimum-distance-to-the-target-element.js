/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
var getMinDistance = function(nums, target, start) {
    let min = Infinity;
    for(let i=0; i<nums.length; i++){
        if(nums[i] === target){
            const diff = Math.abs(i-start);
            if(min > diff) min = diff;
        }
    }
    return min;
};