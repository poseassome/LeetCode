/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRigthDifference = function(nums) {
    let answer = [];
    for(let i=0; i<nums.length; i++){
        const leftsum = nums.slice(0, i).length === 0 ? 0 : nums.slice(0, i).reduce((acc, cur) => acc+cur);
        const rightsum = nums.slice(i+1).length === 0 ? 0 : nums.slice(i+1).reduce((acc, cur) => acc+cur);
        answer.push(Math.abs(leftsum-rightsum));
    }
    return answer;
};