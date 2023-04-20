/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function(nums) {
    let sH = new Map();
    nums = nums.filter(el => el%2 === 0);
    if(!nums.length) return -1;
    for(const x of nums){
        sH.set(x, (sH.get(x) || 0)+1);
    }
    return [...sH.keys()].sort((a,b) => sH.get(b) - sH.get(a) || a - b)[0];
};