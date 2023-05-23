/**
 * @param {string} s
 * @return {number}
 */
var minLength = function(s) {
    const stack = [];
    for(const x of s){
        if(stack.length && (x === 'B' && stack[stack.length-1] === 'A' || x === 'D' && stack[stack.length-1] === 'C')) stack.pop();
        else stack.push(x);
    }
    return stack.length;
};