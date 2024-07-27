/**
 * @param {number[]} nums
 * @return {number}
 */
var duplicateNumbersXOR = function(nums) {
    let set = new Set();
    let res = 0;
    for(const x of nums){
        if(set.has(x)) res ^= x;
        set.add(x);
    }
    return res;
};