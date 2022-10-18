/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function(a, b) {
    const num = Math.min(a, b);
    let cnt = 0;
    for(let i=1; i<=num; i++){
        if(a%i === 0 && b%i === 0) cnt++;
    }
    return cnt;
};