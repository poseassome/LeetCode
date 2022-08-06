/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let sH = new Map();
    for(let i=0; i<nums.length; i++) {
        let num = nums[i];
        if(sH.get(num) === undefined) sH.set(target-num, i);
        else return [sH.get(num), i];
    }
};