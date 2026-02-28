/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumOfAverages = function(nums, k) {
    const len = nums.length;
    const memo = new Array(len).fill(0).map(() => new Array(k + 1).fill(-1));
    const DFS = (i, m) => {
        if(memo[i][m] !== -1) return memo[i][m];
        if(m === 1){
            let sum = 0;
            for(let j=0; j<=i; j++){
                sum += nums[j];
            }
            memo[i][m] = sum / (i+1);
            return memo[i][m];
        }
        let sum = 0;
        for(let j=i; j>=m-1; j--){
            sum += nums[j];
            memo[i][m] = Math.max(memo[i][m], (sum / (i-j+1) + DFS(j-1, m-1)));
        }
        return memo[i][m];
    }
    return DFS(len-1, k);
};