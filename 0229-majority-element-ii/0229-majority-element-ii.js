/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    const map = new Map();
    const res = [];
    for(const x of nums){
        map.set(x, (map.get(x) || 0)+1);
    }
    for(const [key, value] of map.entries()){
        res.push({key: key, value: value});
    }
    return res.filter(el => el.value > nums.length/3).map(el => el.key);
};