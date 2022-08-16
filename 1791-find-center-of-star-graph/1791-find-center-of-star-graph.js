/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
    for(let x of edges[0]){
        if(edges[1].indexOf(x) !== -1) return x;
    }
};