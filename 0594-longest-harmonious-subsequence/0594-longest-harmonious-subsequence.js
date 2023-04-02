/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    let sH = new Map();
    for(const x of nums){
        sH.set(x, (sH.get(x) || 0)+1);
    }
    let max = 0;
    for(const key of sH.keys()){
        if(sH.has(key+1)) max = Math.max(max, sH.get(key)+sH.get(key+1));
    }
    return max;
};