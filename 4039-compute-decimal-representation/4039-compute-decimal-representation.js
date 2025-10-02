/**
 * @param {number} n
 * @return {number[]}
 */
var decimalRepresentation = function(n) {
    let res = [];
    let place = 1;
    while(n > 0){
        let digit = n%10;
        if(digit !== 0) res.push(digit*place);
        n = Math.floor(n/10);
        place *= 10;
    }
    return res.reverse();
};