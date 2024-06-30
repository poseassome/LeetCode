/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let stack = [], res = [];
    for(let i=temperatures.length-1; i>=0; i--){
        while(temperatures[stack[stack.length-1]] <= temperatures[i]) stack.pop();
        res[i] = !stack.length ? 0 : stack[stack.length-1]-i;
        stack.push(i);
    }
    return res;
};