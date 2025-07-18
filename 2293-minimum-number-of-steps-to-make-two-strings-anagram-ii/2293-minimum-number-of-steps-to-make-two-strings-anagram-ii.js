/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    let map1 = new Map(), map2 = new Map();
    for(const x of s){
        map1.set(x, (map1.get(x) || 0) +1);
    }
    for(const x of t){
        map2.set(x, (map2.get(x) || 0) +1);
        if(map1.has(x)) map1.set(x, map1.get(x)-1);
    }
    for(let x of s){
        if(map2.has(x)) map2.set(x, map2.get(x)-1);
    }
    return [...map1.values(), ...map2.values()].reduce((acc, cur) => cur > 0 ? acc+cur : acc, 0);
};