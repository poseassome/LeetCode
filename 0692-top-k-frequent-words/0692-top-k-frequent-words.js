/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    let arr = [...new Set(words)];
    let map = new Map();
    for(const x of arr){
        map.set(x, words.filter(el => el === x).length);
    }
    arr.sort((a, b) => {
        if(map.get(a) === map.get(b)) return a.localeCompare(b);
        return map.get(b) - map.get(a);
    })
    return arr.slice(0, k);
};