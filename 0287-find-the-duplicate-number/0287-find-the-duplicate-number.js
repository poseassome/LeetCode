/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let set = new Set();
    for(const x of nums){
        if(set.has(x)) return x;
        else set.add(x);
    }
};