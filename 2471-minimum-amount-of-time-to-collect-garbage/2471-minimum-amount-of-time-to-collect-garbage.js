/**
 * @param {string[]} garbage
 * @param {number[]} travel
 * @return {number}
 */
var garbageCollection = function(garbage, travel) {
    const set = new Set();
    let res = 0;
    for(let i=garbage.length-1; i>=0; i--){
        const houseGarbage = garbage[i];
        for(let j=0; set.size<3 && j<houseGarbage.length; j++){
            set.add(houseGarbage[j]);
        }
        res += houseGarbage.length + (set.size*(travel[i-1] || 0));
    }
    return res;
};