/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = new Map();
    for(const x of nums){
        map.set(x, (map.get(x) || 0)+1);
    }
    return Array.from(map.entries()).sort((a,b) => b[1]-a[1]).slice(0, k).map(el => el[0]);
};