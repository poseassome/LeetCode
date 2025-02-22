/**
 * @param {number[]} nums
 * @return {boolean}
 */
var predictTheWinner = function(nums) {
    let dp = Array.from(Array(nums.length), () => new Array(nums.length));
    for(let i=nums.length-1; i>=0; i--){
        for(let j=i; j<nums.length; j++){
            if(i === j) dp[i][j] = nums[i];
            else dp[i][j] = Math.max(nums[i] - dp[i+1][j], nums[j] - dp[i][j-1]);
        }
    }
    return dp[0][nums.length-1] >= 0;
};