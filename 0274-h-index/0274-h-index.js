/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    let map = {};
    let max = 0;
    citations.map(el => map[el] = map[el] ? map[el]+1 : 1);
    for(let i=0; i<=citations.length; i++){
        max = Math.max(max, citations.length >= i ? i : 0);
        citations.length -= map[i] ? map[i] : 0;
    }
    return max;
};