/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestInteger = function(nums, k) {
    let res = -1;
    if(k < nums.length){
        let map = new Map();
        for(let i=0; i<nums.length; i++){
            map.set(nums[i], (map.get(nums[i]) || 0) + 1);
        }
        let keys = Array.from(map.keys());
        let arr = [];
        for(let i=0; i<keys.length; i++){
            if(map.get(keys[i]) === 1) arr.push(keys[i]);
        }
        if(arr.length > 0){
            if(k === 1) res = Math.max(res, ...arr);
            else {
                for(let i=0; i<arr.length; i++){
                    if(nums[0] === arr[i] || nums[nums.length-1] === arr[i]) res = Math.max(res, arr[i]);
                }
            }
        }
    } else res = Math.max(...nums);
    return res;
};