/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    let map = {}, first={}, last={}, max = 0;
    for(let i=0; i<nums.length; i++){
        const num = nums[i];
        map[num] = (map[num] || 0)+1;
        max = Math.max(max, map[num]);
        if(first[num] === undefined) first[num] = i;
        last[num] = i;
    }
    let length = nums.length;
    for(const key in map){
        if(map[key] === max) length = Math.min(length, last[key]-first[key]+1);
    }
    return length;
};