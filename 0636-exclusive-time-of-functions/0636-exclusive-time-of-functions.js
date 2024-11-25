/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
var exclusiveTime = function(n, logs) {
    const arr = Array(n).fill(0), stack = [];
    for(const log of logs){
        let [id, x, time] = log.split(':');
        if(x === 'start') stack.push([+id, +time]);
        else {
            let [tempId, tempTime] = stack.pop();
            let val = (+time - tempTime) + 1;
            arr[tempId] += val;
            if(stack.length) arr[stack[stack.length-1][0]] -= val;
        }
    }
    return arr;
};