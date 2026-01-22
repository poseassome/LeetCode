/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    let map = new Map();
    let visited = new Set();

    for(let i=0; i<prerequisites.length; i++){
        if(!map.has(prerequisites[i][0])){
            map.set(prerequisites[i][0], new Set());
        }
        map.get(prerequisites[i][0]).add(prerequisites[i][1]);
    }

    const DFS = (node) => {
        if(visited.has(node)) return false;
        let dep = map.get(node);
        if(dep){
            visited.add(node);
            for(const entry of dep.entries()){
                if(!DFS(entry[0])) return false;
            }
            visited.delete(node);
            map.delete(node);
        }
        return true;
    }
    for(const [node, dep] of map) {
        if(!DFS(node)) return false;
    }
    return true;
};