/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
    let sH = new Map();
    for(let x of nums){
        if(sH.has(x)) sH.set(x, sH.get(x)+1);
        else sH.set(x, 1);
    }
    for(let val of sH.values()){
        if(val%2 !== 0) return false;
    }
    return true;
};