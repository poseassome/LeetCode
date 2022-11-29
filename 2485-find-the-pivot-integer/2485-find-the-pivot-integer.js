/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(n) {
    const sum = (n*(n+1))/2;
    let temp = 0;
    for(let i=1; i<=n; i++){
        if(temp === sum-temp-i) return i;
        temp += i;
    }
    return -1;
};