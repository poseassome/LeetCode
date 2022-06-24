/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    n = n.toString().split('').map((val) => Number(val));
    return (n.reduce((acc, cur) => { return acc*=cur }, 1)) - (n.reduce((acc, cur) => { return acc+=cur }, 0))
};