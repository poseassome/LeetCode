/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(n, edges) {
    if(!edges || n<2) return [0];
    let graph = [];
    for(const [x, y] of edges){
        graph[x] = graph[x] || [];
        graph[y] = graph[y] || [];
        graph[x].push(y);
        graph[y].push(x);
    }
    let leaves = [];
    graph.map((el, idx) => el.length === 1 && leaves.push(idx));
    while(n>2){
        n = n-leaves.length;
        let nextLeaves = [];
        for(const x of leaves){
            let temp = graph[x].pop();
            graph[temp].splice(graph[temp].indexOf(x), 1);
            graph[temp].length === 1 && nextLeaves.push(temp);
        }
        leaves = nextLeaves;
    }
    return leaves;
};