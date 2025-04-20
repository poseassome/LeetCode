/**
 * @param {number[]} original
 * @param {number[][]} bounds
 * @return {number}
 */
var countArrays = function(original, bounds) {
    if(original.length === 0) return 0;
    let start = bounds[0][0], end = bounds[0][1];
    for(let i=1; i<original.length; i++){
        const diff = original[i] - original[i-1];
        start = Math.max(start+diff, bounds[i][0]);
        end = Math.min(end+diff, bounds[i][1]);
    }
    return Math.max(end-start+1, 0);
};