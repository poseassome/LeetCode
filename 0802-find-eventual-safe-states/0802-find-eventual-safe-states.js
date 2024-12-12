/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function(graph) {
    const DP = {}, visited = new Set();
    for(let i=0; i<graph.length; i++){
        DFS(i);
    }
    return graph.map((el, idx) => idx).filter(el => !DP[el]);
    
    function DFS(i) {
        if(DP[i] !== undefined) return DP[i];
        let hasCycle = false;
        visited.add(i);
        for(const x of graph[i]){
            if(visited.has(x) || DFS(x)){
                hasCycle = true;
                break;
            }
        }
        visited.delete(i);
        DP[i] = hasCycle;
        return hasCycle;
    }
};