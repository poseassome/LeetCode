/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function(n) {
    if(!n) return 1;
    let res = 10, base = 9;
    for(let i=2; i<=n; i++){
        base *= (9-i+2);
        res += base;
    }
    return res;
};