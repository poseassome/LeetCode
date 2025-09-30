/**
 * @param {string} s
 * @return {string}
 */
var majorityFrequencyGroup = function(s) {
    const map = new Map();
    for(const x of s){
        map.set(x, (map.get(x)||0) + 1);
    }
    const groups = {};
    let maxSize = 0;
    for(const [key, val] of map){
        groups[val] = groups[val] || [];
        groups[val].push(key);
        maxSize = Math.max(maxSize, groups[val].length);
    }
    const keys = Object.keys(groups);
    for(let i=keys.length-1; i>=0; i--){
        if(groups[keys[i]].length === maxSize) return groups[keys[i]].join('');
    }
};