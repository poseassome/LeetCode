/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
    let arr = [];
    for(const x of ops){
        if(x === 'C') arr.pop();
        else if(x === 'D') arr.push(Number(2*arr[arr.length-1]));
        else if(x === '+') arr.push(Number(arr[arr.length-1]+arr[arr.length-2]));
        else arr.push(Number(x));
    }
    return arr.length > 0 ? arr.reduce((acc, cur) => acc+cur) : 0;
};