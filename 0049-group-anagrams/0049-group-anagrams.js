/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = {};
    for(const x of strs){
        const key = [...x].sort();
        if(!map[key]) map[key] = [];
        map[key].push(x);
    }
    return Object.values(map);
};