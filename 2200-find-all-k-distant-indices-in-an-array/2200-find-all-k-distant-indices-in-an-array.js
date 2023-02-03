/**
 * @param {number[]} nums
 * @param {number} key
 * @param {number} k
 * @return {number[]}
 */
var findKDistantIndices = function(nums, key, k) {
    let answer = [], keys = [];
    for(let i=0; i<nums.length; i++){
        if(nums[i] === key) keys.push(i);
    }
    for(let i=0; i<nums.length; i++){
        for(const j of keys){
            if(Math.abs(i-j) <= k){
                answer.push(i);
                break;
            }
        }
    }
    return answer;
};