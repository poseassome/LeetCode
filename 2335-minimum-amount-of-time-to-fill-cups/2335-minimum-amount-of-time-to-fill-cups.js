/**
 * @param {number[]} amount
 * @return {number}
 */
var fillCups = function(amount) {
    let total = 0;
    let max = 0;
    for(let i=0; i<amount.length; i++){
        max = Math.max(max, amount[i]);
        total += amount[i];
    }
    if(max >= total-max) return max;
    return Math.ceil(total/2);
};