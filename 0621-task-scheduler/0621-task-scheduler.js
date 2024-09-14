/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    let map = new Map();
    for(const x of tasks){
        map.set(x, (map.get(x) || 0) + 1);
    }
    let max = 0, maxCnt = 0;
    for(const val of map.values()){
        if(val === max) maxCnt++;
        else if(val > max) {
            max = val;
            maxCnt = 1;
        }
    }
    return Math.max(tasks.length, (n+1)*(max-1)+maxCnt);
};