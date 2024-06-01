/**
 * @param {number[]} apple
 * @param {number[]} capacity
 * @return {number}
 */
var minimumBoxes = function(apple, capacity) {
    let sum = apple.reduce((acc, cur) => acc+cur, 0);
    let cap = capacity.sort((a, b) => b - a);
    for(let i=0; i<cap.length; i++){
        sum -= cap[i];
        if(sum <= 0) return i+1;
    }
    return 0;
};