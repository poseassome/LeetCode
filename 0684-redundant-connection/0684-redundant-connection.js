/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
    const leaves = edges.flat().filter((el, idx, arr) => arr.indexOf(el) === arr.lastIndexOf(el));
    if(leaves.length) return findRedundantConnection(edges.filter(([a, b]) => !leaves.includes(a) && !leaves.includes(b)));
    return edges.at(-1);
};