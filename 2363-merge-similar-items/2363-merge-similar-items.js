/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
var mergeSimilarItems = function(items1, items2) {
    let sH = new Map();
    for(const [val, weight] of items1){
        if(sH.has(val)) sH.set(val, sH.get(val)+weight);
        else sH.set(val, weight);
    }
    for(const [val, weight] of items2){
        if(sH.has(val)) sH.set(val, sH.get(val)+weight);
        else sH.set(val, weight);
    }
    let arr = [];
    for(const [key, val] of sH){
        arr.push([key, val]);
    }
    return arr.sort((a,b) => a[0]-b[0]);
};