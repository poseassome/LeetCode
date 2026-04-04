/**
 * @param {number[]} fronts
 * @param {number[]} backs
 * @return {number}
 */
var flipgame = function(fronts, backs) {
    const set = new Set();
    for(let i=0; i<fronts.length; i++){
        if(fronts[i] === backs[i]) set.add(fronts[i]);
    }
    let min = Number.MAX_VALUE;
    for(const x of fronts) {
        if(!set.has(x)) min = Math.min(min, x);
    }
    for(const x of backs){
        if(!set.has(x)) min = Math.min(min, x);
    }
    return min === Number.MAX_VALUE ? 0 : min;
};