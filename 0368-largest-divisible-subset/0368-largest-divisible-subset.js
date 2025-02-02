/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
    const len = nums.length;
    if(len <= 1) return nums;
    nums.sort((a,b) => a-b);
    const dp = new Array(len).fill(1);
    const pre = new Array(len).fill(-1);
    let maxIdx = 0;
    
    for(let i=1; i<len; i++){
        for(let j=0; j<i; j++){
            if(nums[i]%nums[j] === 0 && dp[i] < dp[j]+1){
                dp[i] = dp[j]+1;
                pre[i] = j;
                if(dp[i] > dp[maxIdx]) maxIdx = i;
            }
        }
    }

    const res = [];
    while(maxIdx !== -1){
        res.push(nums[maxIdx]);
        maxIdx = pre[maxIdx];
    }
    return res.reverse();
};