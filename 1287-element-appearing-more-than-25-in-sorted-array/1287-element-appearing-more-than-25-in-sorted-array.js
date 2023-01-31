/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
    let sH = new Map();
    for(const x of arr){
        if(sH.has(x)) sH.set(x, sH.get(x)+1);
        else sH.set(x, 1);
    }
    for(const key of sH.keys()){
        if(sH.get(key) > arr.length*0.25) return parseInt(key);
    }
    return 0;
};