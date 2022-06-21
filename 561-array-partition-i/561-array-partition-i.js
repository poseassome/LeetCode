/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    nums.sort((a,b) => b-a);
    let answer = 0;
    for(let i=1; i<nums.length; i+=2){
        answer += nums[i]
    }
    return answer;
};