/**
 * @param {number} n
 * @param {number} t
 * @return {number}
 */
var smallestNumber = function(n, t) {
    const digitProd = num => [...String(num)].reduce((acc, cur) => acc*cur, 1);
    while(digitProd(n)%t !== 0) n++;
    return n;
};