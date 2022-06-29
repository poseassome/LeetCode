/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    let stack = [];
    for(let x of s){
        if(stack[stack.length-1] === x) stack.pop();
        else stack.push(x)
    }
    return stack.join('');
};