/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function(n) {
    const DP = new Array(5).fill(1);
    while(n > 1){
        for(let i=0; i<DP.length; i++){
            DP[i] = DP[i]+(DP[i-1] || 0);
        }
        n--;
    }
    return DP.reduce((acc, cur) => acc+cur, 0);
};