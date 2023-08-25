/**
 * @param {string} s
 * @param {string} target
 * @return {number}
 */
var rearrangeCharacters = function(s, target) {
    const sMap = new Map();
    const tMap = new Map();
    for(const x of s){
        sMap.set(x, (sMap.get(x) || 0)+1);
    }
    for(const x of target){
        tMap.set(x, (tMap.get(x) || 0)+1);
    }
    let min = 100;
    for(const x of tMap){
        min = Math.min(min, (sMap.get(x[0]) || 0)/x[1]);
    }
    return Math.floor(min);
};