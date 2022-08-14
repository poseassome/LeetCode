/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    const left = nums.slice(0, n);
    const right = nums.slice(n, nums.length);
    let answer = [];
    for(let i=0; i<n; i++){
        answer.push(left[i], right[i]);
    }
    return answer;
};