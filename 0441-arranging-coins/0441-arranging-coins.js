/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let i = 1;
    let row = 0;
    while(n-i >= 0){
        n -= i;
        row++;
        i++;
    }
    return row;
};