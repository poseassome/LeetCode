/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findSmallestSetOfVertices = function(n, edges) {
    let set = new Set(), arr = [];
    for(let i=0; i<edges.length; i++){
        set.add(edges[i][1]);
    }
    for(let i=0; i<n; i++){
        if(!set.has(i)) arr.push(i);
    }
    return arr;
};