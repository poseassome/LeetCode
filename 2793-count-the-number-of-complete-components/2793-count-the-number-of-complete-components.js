/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countCompleteComponents = function(n, edges) {
    let arr = Array.from({length : n}, () => []);
    let visited = new Array(n).fill(false);
    let res = 0;

    for(const [x, y] of edges){
        arr[x].push(y);
        arr[y].push(x);
    }

    const DFS = x => {
        visited[x] = true;
        vertices++;
        for(const y of arr[x]){
            edges++;
            if(!visited[y]) DFS(y);
        }
    }

    for(let i=0; i<n; i++){
        if(!visited[i]){
            vertices = 0;
            edges = 0;
            DFS(i);
            if(vertices*(vertices-1) === edges) res++;
        }
    }
    return res;
};