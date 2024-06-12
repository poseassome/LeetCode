/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var numberOfChild = function(n, k) {
    const target = parseInt(k/(n-1));
    const child = k%(n-1);
    if(target%2 === 0) return child;
    else return (n-1)-child;
};