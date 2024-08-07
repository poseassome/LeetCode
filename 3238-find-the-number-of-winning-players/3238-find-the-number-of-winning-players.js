/**
 * @param {number} n
 * @param {number[][]} pick
 * @return {number}
 */
var winningPlayerCount = function(n, pick) {
    let DP = new Array(n).fill(0).map(el => new Array(11).fill(0));
    for(const [i,j] of pick){
        DP[i][j]++;
    }
    let res = 0;
    for(let i=0; i<n; i++){
        for(let j=0; j<11; j++){
            if(DP[i][j]>i){
                res++;
                break;
            }
        }
    }
    return res;
};