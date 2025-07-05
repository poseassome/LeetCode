/**
 * @param {number} lo
 * @param {number} hi
 * @param {number} k
 * @return {number}
 */
var getKth = function(lo, hi, k) {
    const getPower = (n, s) => {
        if(n%2 === 0) n = n/2;
        else n = 3*n+1;
        s++;
        if(n === 1) return s;
        return getPower(n, s);
    }

    let map = new Map();
    for(let i=lo; i<=hi; i++){
        map.set(i, getPower(i, 0));
    }
    map = [...map.entries()].sort((a,b) => a[1]-b[1]);
    return map[k-1][0];
};