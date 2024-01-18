/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function(nums) {
    let map = {}, arr = [];
    for(const x of nums){
        map[x] = (map[x] || 0) + 1;
        if(map[x] > arr.length) arr.push([]);
        arr[map[x]-1].push(x);
    }
    return arr;
};