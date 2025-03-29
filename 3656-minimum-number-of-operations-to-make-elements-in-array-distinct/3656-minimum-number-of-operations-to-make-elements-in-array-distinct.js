/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    let cnt = 0, idx = 0;
    let distinct = {};
    while(idx < nums.length){
        if(distinct[nums[idx]] !== undefined){
            cnt = Math.ceil((distinct[nums[idx]]+1) / 3);
            idx = cnt*3;
            distinct = {};
        }
        distinct[nums[idx]] = idx;
        idx++;
    }
    return cnt;
};