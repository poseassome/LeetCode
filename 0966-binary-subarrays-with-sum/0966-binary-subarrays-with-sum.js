/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function(nums, goal) {
    let prefixSum = 0;
    let map = {};
    map[0] = 1;
    let cnt = 0;
    for(let i=0; i<nums.length; i++){
        prefixSum += nums[i];
        let check = prefixSum - goal;
        if(map[check]) cnt += map[check] 
        map[prefixSum] = (map[prefixSum] || 0) + 1;
    }
    return cnt;
};