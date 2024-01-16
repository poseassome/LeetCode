/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    const map = {};
    for(const x of nums){
        map[x] = map[x] ? map[x]+1 : 1;
    }
    return Object.values(map).filter(el => el === Math.max(...Object.values(map))).reduce((acc, cur) => acc+cur);
};