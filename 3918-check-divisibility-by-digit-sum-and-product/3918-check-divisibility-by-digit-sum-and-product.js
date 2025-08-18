/**
 * @param {number} n
 * @return {boolean}
 */
var checkDivisibility = function(n) {
    let sum = n.toString().split('').map(Number).reduce((acc, cur) => acc+cur, 0);
    let product = n.toString().split('').map(Number).reduce((acc, cur) => acc*cur, 1);
    if(n%(sum+product) === 0) return true;
    else return false;
};