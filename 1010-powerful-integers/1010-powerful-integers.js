/**
 * @param {number} x
 * @param {number} y
 * @param {number} bound
 * @return {number[]}
 */
var powerfulIntegers = function(x, y, bound) {
    const set = new Set();  
    const xLimit = Math.log(bound) / Math.log(x);
    const yLimit = Math.log(bound) / Math.log(y);

    for(let i=0; i<=xLimit; i++) {
        for(let j=0; j<=yLimit; j++){
            const res = x**i + y**j;
            if(res > bound) break;
            set.add(res);
            if(y === 1) break;
        }
        if(x === 1) break;
    }
    return [...set];
};