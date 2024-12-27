/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let sum = 0, cnt = 0, map = new Map();
    map.set(0, 1);
    for(let i=0; i<nums.length; i++){
        sum += nums[i];
        let tmp = sum - k;
        if(map.has(tmp)) cnt += map.get(tmp);
        map.set(sum, (map.get(sum) || 0) + 1);
    }
    return cnt;
};