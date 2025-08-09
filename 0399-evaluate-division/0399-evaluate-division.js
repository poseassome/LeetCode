/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
    const graph = new Map();

    for(const [i, eq] of equations.entries()){
        const value = values[i];
        const [a, b] = eq;
        
        const path1 = graph.get(a) || [];
        path1.push([b, value]);
        graph.set(a, path1);

        const path2 = graph.get(b) || [];
        path2.push([a, 1 / value]);
        graph.set(b, path2)
    }

    const BFS = (src, target) => {
        if(!graph.has(src) || !graph.has(target)) return -1;
        if(src === target) return 1;
        const queue = [[src, 1]];
        const visited = new Set();
        visited.add(src);

        while(queue.length){
            const [n, w] = queue.shift();
            if(n === target) return w;
            for(const [nei, weight] of graph.get(n)){
                if(!visited.has(nei)) {
                    queue.push([nei, w*weight]);
                    visited.add(nei);
                }
            }
        }
        return -1;
    }

    const res = [];
    for(const q of queries) {
        const visited = new Set();
        res.push(BFS(q[0], q[1]));
    }
    return res;
};