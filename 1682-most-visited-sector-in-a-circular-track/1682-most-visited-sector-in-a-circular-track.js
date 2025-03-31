/**
 * @param {number} n
 * @param {number[]} rounds
 * @return {number[]}
 */
var mostVisited = function(n, rounds) {
    const res = [], first = rounds[0];
    let last = rounds[rounds.length-1];
    while(first !== last){
        res.push(last);
        last = last-1 === 0 ? n : last-1;
    }
    res.push(first);
    return res.sort((a, b) => a-b);
};