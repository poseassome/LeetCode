/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let sH = new Map();
    for(let x of nums){
        if(sH.has(x)) sH.set(x, sH.get(x) + 1);
        else sH.set(x, 1);
    }
    for (let key of sH.keys()) {
      if(sH.get(key)===1) return key;
    }
};