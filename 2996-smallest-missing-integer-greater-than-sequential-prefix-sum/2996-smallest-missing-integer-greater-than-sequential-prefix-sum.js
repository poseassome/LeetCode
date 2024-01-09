/**
 * @param {number[]} nums
 * @return {number}
 */
var missingInteger = function(nums) {
    let set = new Set();
    for(const x of nums){
        set.add(x);
    }
    let int = nums[0], i = 1;
    while(i < nums.length && nums[i] === nums[i-1]+1){
        int += nums[i];
        i++;
    }
    while(set.has(int)) int++;
    return int;
};