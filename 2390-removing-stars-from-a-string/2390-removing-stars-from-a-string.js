/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    const stack = [];
    for(const x of s){
        x === '*' ? stack.pop() : stack.push(x);
    }
    return stack.join('');
};