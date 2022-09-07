/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
    let xor = start;
    for(let i=1; i<n; i++){
        xor ^= (start+=2);
    }
    return xor;
};