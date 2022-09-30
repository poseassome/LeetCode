/**
 * @param {string} s
 * @param {number[]} distance
 * @return {boolean}
 */
var checkDistances = function(s, distance) {
    for(let x of new Set(s)){
        if(s.lastIndexOf(x)-s.indexOf(x)-1 !== distance[x.charCodeAt(0)-97]) return false;
    }
    return true;
};