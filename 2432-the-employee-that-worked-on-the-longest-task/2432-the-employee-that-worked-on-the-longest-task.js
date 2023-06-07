/**
 * @param {number} n
 * @param {number[][]} logs
 * @return {number}
 */
var hardestWorker = function(n, logs) {
    let task = [], start=0;
    for(const [id, leave] of logs){
        task.push([id, leave-start]);
        start = leave;
    }
    task.sort((a, b) => {
        if(a[1] !== b[1]) return b[1]-a[1];
        return a[0]-b[0];
    })
    return task[0][0];
};