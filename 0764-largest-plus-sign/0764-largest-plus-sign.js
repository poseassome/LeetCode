/**
 * @param {number} n
 * @param {number[][]} mines
 * @return {number}
 */
var orderOfLargestPlusSign = function(n, mines) {
    const dp = Array(n).fill('').map(_ => Array(n).fill(n));
	mines.forEach(([row, col]) => dp[row][col] = 0);

	for(let row=0; row<n; row++){
		let left = top = 0;
		for(let col=0; col<n; col++){
			dp[row][col] = Math.min(dp[row][col], left = dp[row][col] ? left+1 : 0);
			dp[col][row] = Math.min(dp[col][row], top = dp[col][row] ? top+1 : 0);
		}
	}

	for(let row=0; row<n; row++){
		let right = bottom = 0;
		for(let col=n-1; col>=0; col--){
			dp[row][col] = Math.min(dp[row][col], right = dp[row][col] ? right+1 : 0);
			dp[col][row] = Math.min(dp[col][row], bottom = dp[col][row] ? bottom+1 : 0);
		}
	}

	return Math.max(...dp.map(col => Math.max(...col)));
};