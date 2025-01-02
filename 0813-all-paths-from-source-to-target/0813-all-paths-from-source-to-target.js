/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    const target = graph.length-1, res = [];
    const DFS = (node, path) => {
        path.push(node);
        if(node === target){
            res.push(path);
            return;
        }
        for(const x of graph[node]){
            DFS(x, [...path]);
        }
    }
    DFS(0, []);
    return res;
};