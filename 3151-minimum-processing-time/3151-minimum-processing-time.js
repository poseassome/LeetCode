/**
 * @param {number[]} processorTime
 * @param {number[]} tasks
 * @return {number}
 */
var minProcessingTime = function(processorTime, tasks) {
    tasks.sort((a,b) => a-b);
    processorTime.sort((a,b) => b-a);
    let max = -Infinity;
    for(let i=0; i<processorTime.length; i++){
        for(let j=4*i; j<((i+1)*4); j++){
            max = Math.max(max, tasks[j] + processorTime[i]);
        }
    }
    return max;
};