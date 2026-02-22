/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndices = function(nums) {
    let n = nums.length;
    let total = nums.reduce((cur, acc) => cur + acc, 0);
    let ans = 0;
    for(let i=0; i<n-1; i++){
        total = total - nums[i];
        const avg = total / (n-i-1);
        if(nums[i] > avg) ans++;
    }
    return ans;
};