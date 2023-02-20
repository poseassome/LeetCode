/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
    let sH = new Map();
    for(const x of nums){
        sH.set(x, (sH.get(x) || 0) + 1);
        if(sH.get(x) === nums.length/2) return x;
    }
    return -1;
};