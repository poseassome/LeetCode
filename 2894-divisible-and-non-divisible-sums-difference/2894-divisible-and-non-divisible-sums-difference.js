/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
    let res = 0;
    for(let i=1; i<=n; i++){
        i%m ? res += i : res -= i;
    }
    return res;
};