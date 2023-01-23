/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function(n) {
    n = n.toString();
    let sum = Number(n[0]);
    for(let i=1; i<n.length; i++){
        if(i%2 === 0) sum += Number(n[i]);
        else sum -= Number(n[i]);
    }
    return sum;
};