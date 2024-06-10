/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function(s) {
    let stack = [];
    for(const x of s){
        if(!isNaN(x)) stack.pop();
        else stack.push(x);
    }
    return stack.join('');
};