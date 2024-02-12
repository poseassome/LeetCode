/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    let map = {};
    let res = 0;
    for(const x of s){
        map[x] = (map[x] || 0)+1;
    }
    for(const x of t){
        if(map[x] > 0) map[x]--;
        else res++;
    }
    return res;
};