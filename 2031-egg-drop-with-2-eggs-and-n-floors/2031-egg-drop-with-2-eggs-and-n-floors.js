/**
 * @param {number} n
 * @return {number}
 */
var twoEggDrop = function(n) {
    let cnt = 1;
    while(n > 0){
        n -= cnt;
        cnt++;
    }
    return cnt-1;
};