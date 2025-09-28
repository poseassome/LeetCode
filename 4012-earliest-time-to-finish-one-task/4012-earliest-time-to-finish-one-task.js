/**
 * @param {number[][]} tasks
 * @return {number}
 */
var earliestTime = function(tasks) {
    let res = Number.MAX_SAFE_INTEGER;
    for(let i=0; i<tasks.length; i++){
        res = Math.min(res, tasks[i][0] + tasks[i][1]);
    }
    return res;
};