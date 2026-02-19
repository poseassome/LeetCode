/**
 * @param {number[]} bulbs
 * @return {number[]}
 */
var toggleLightBulbs = function(bulbs) {
    const map = new Map();
    for(const x of bulbs){
        map.set(x, (map.get(x) ?? 0) + 1);
    }

    const res = [];
    for(const [bulb, count] of map){
        if(count%2) res.push(bulb);
    }
    return res.sort((a, b) => a-b);
};