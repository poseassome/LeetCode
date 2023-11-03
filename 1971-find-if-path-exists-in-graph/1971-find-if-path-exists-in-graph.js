/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    let graph = new Map(), visited = new Set();
    for(const [u, v] of edges){
        if(!graph.has(u)) graph.set(u, []);
        if(!graph.has(v)) graph.set(v, []);
        graph.get(u).push(v);
        graph.get(v).push(u);
    }
    let queue = [source];
    while(queue.length>0){
        const node = queue.shift();
        if(node === destination) return true;
        if(visited.has(node)) continue;
        visited.add(node);
        if(graph.has(node)){
            for(const next of graph.get(node)){
                if(!visited.has(next)) queue.push(next);
            }
        }
    }
    return false;
};