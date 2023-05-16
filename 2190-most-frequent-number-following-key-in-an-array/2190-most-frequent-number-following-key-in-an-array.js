/**
 * @param {number[]} nums
 * @param {number} key
 * @return {number}
 */
var mostFrequent = function(nums, key) {
    let map = {};
    nums.forEach((el, idx) => {
        if(el === key) map[nums[idx+1]] ? map[nums[idx+1]]++ : map[nums[idx+1]] = 1;
    })
    let keys = Object.entries(map).sort((a,b) => b[1]-a[1]);
    return keys[0][0];
};