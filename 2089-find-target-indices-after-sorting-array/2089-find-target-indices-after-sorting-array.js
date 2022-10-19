/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    let answer = [];
    nums.sort((a, b) => a-b);
    nums.forEach((el, idx) => {
        if(el === target) answer.push(idx);
    })
    return answer;
};