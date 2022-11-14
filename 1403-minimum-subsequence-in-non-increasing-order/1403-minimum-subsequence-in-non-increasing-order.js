/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function(nums) {
    nums.sort((a,b) => b-a);
    let answer = [nums[0]];
    let sum = 0;
    for(let i=1; i<nums.length; i++){
        sum += nums[i];
    }
    for(let i=1; i<nums.length; i++){
        let reduce = answer.reduce((a,b) => a+b, 0);
        if(reduce > sum) return answer;
        answer.push(nums[i]);
        sum -= nums[i]
    }
    return answer;
};