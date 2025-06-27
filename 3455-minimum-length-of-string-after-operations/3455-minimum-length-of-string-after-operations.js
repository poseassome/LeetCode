/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function(s) {
    let res = 0, map = new Map();
    for(const x of s){
        map.set(x, (map.get(x)||0) + 1);
    }
    for(let [key, val] of map){
        while(val >= 3) val -= 2;
        res += val;
    }
    return res;
};