/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumDivisibleByK = function(nums, k) {
    let map = new Map();
    for(const x of nums){
        map.set(x, (map.get(x)||0)+1);
    }
    let sum = 0;
    for(const [key, val] of map){
        if(val%k === 0) sum += key*val;
    }
    return sum;
};