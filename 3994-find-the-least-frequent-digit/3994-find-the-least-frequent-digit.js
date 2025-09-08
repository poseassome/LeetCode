/**
 * @param {number} n
 * @return {number}
 */
var getLeastFrequentDigit = function(n) {
    let arr = [...n.toString()].map(Number);
    let map = {};
    for(const x of arr){
        map[x] = (map[x] || 0) + 1;
    }
    let sort = Object.keys(map).sort((a,b) => {
        if(map[a] === map[b]) return a-b;
        return map[a] - map[b];         
    })
    return parseInt(sort[0]);
};