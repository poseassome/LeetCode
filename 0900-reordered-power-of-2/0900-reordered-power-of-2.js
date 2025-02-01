/**
 * @param {number} n
 * @return {boolean}
 */
var reorderedPowerOf2 = function(n) {
    const sort = num => num.toString().split('').sort().join('');
    const set = new Set();
    let res = 1;
    while(res < 10**9){
        set.add(sort(res));
        res = res*2;
    }
    return set.has(sort(n));
};