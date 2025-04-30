/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function(word) {
    let map = new Map();
    for(const x of word){
        map.set(x, (map.get(x) || 0) + 1);
    }
    let freqHeap = [...map.values()].sort((a,b) => b-a);
    let total = 0, key = 0;
    while(freqHeap.length){
        total += Math.floor(key/8+1) * freqHeap.shift();
        key++;
    }
    return total;
};