/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function(pairs) {
    pairs.sort((a,b) => a[1]-b[1]);
    let cnt = 1, i = 0;
    for(let j=1; j<pairs.length; j++){
        if(pairs[j][0] > pairs[i][1]){
            cnt++;
            i = j;
        }
    }
    return cnt;
};