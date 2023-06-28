/**
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
var isCovered = function(ranges, left, right) {
    let set = new Set();
    for(const x of ranges){
        for(let i=x[0]; i<=x[1]; i++){
            set.add(i);
        }
    }
    for(let i=left; i<=right; i++){
        if(!set.has(i)) return false;
    }
    return true;
};