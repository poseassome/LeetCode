/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
var canFormArray = function(arr, pieces) {
    for(const x of pieces){
        const idx = arr.indexOf(x[0]);
        if(idx === -1) return false;
        for(let i=1; i<x.length; i++){
            if(x[i] !== arr[i+idx]) return false;
        }
    }
    return true;
};