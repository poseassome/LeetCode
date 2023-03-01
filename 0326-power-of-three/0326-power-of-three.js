/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if(n === 1) return true;
    if(n <= 2) return false;
    while(n>3){
        if(n%3 !== 0) return false;
        n = n/3;
    }
    return n === 3;
};