/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxUncrossedLines = function(nums1, nums2) {
    const dp = new Array(nums1.length+1);
    let max = 0;
    for(let i=0; i<nums1.length+1; i++){
        dp[i] = new Array(nums2.length+1).fill(0);
    }
    for(let i=0; i<nums1.length; i++){
        const top = nums1[i];
        for(let j=0; j<nums2.length; j++){
            const num = nums2[j];
            if(num === top) dp[i+1][j+1] = 1+dp[i][j];
            else dp[i+1][j+1] = Math.max(dp[i+1][j], dp[i][j+1]);
            max = Math.max(max, dp[i+1][j+1]);
        }
    }
    return max;
};