/**
 * @param {number[]} queries
 * @param {number} m
 * @return {number[]}
 */
var processQueries = function(queries, m) {
    let res = [], arr = [];
    for(let i=1; i<=m; i++){
        arr.push(i);
    }
    for(let i=0; i<queries.length; i++){
        const idx = arr.indexOf(queries[i]);
        res.push(idx);
        arr.splice(idx, 1);
        arr.unshift(queries[i]);
    }
    return res;
};