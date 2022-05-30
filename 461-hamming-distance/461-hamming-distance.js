/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    x = x.toString(2)
    y = y.toString(2)
    if (x.length < y.length) {
        x = x.padStart(y.length, 0)
    } else {
        y = y.padStart(x.length, 0)
    }
    
    let answer = 0
    for (let i=0; i<x.length; i++) {
        if (x[i] != y[i]) answer++;
    }
    return answer;
};