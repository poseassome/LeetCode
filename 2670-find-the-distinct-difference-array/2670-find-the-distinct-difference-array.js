/**
 * @param {number[]} nums
 * @return {number[]}
 */
var distinctDifferenceArray = function(nums) {
    let arr = [];
    for(let i=0; i<nums.length; i++){
        const front = nums.slice(0, i+1);
        const back = nums.slice(i+1);
        arr.push(new Set(front).size - new Set(back).size);
    }
    return arr;
};