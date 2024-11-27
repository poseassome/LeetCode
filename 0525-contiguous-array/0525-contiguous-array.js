/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    let res = 0, sum = 0, map = new Map();
    map.set(0, -1);
    for(let i=0; i<nums.length; i++){
        if(nums[i] === 0) sum--;
        else sum++;
        if(map.has(sum)){
            const len = i - map.get(sum);
            res = Math.max(res, len);
        } else map.set(sum, i);
    }
    return res;
};