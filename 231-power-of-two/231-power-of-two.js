/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if(n === 1) return true;
    else {
        while(n > 1){
            n = n/2;
        }
        if(n === 1) return true;
        else return false;
    }
};