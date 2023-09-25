/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    const trustRecord = new Array(n+1).fill(0);
    for(const [person, trusted] of trust){
        trustRecord[person]--;
        trustRecord[trusted]++;
    }
    for(let i=1; i<=n; i++){
        if(trustRecord[i] === n-1) return i;
    }
    return -1;
};