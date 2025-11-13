/**
 * @param {number[]} candidates
 * @return {number}
 */
var largestCombination = function(candidates) {
    const res = new Array(24).fill(0);
    let str, i;
    candidates.forEach(el => {
        str = el.toString(2).split('').reverse();
        for(i=0; i<24; i++){
            res[i] += Number(str[i]) || 0;
        }
    })
    return Math.max(...res);
};