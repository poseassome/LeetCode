/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function(nums1, nums2) {
    const num1Len = nums1.length, num2Len = nums2.length;
    let res = 0;
    let dp = new Array(num1Len+1).fill().map(() => new Array(num2Len+1).fill(0));
    
    for(let i=1; i<=num1Len; i++){
        for(let j=1; j<=num2Len; j++){
            if(nums1[i-1] === nums2[j-1]){
                dp[i][j] = dp[i-1][j-1]+1;
                res = Math.max(res, dp[i][j]);
            }
        }
    }
    return res;
};