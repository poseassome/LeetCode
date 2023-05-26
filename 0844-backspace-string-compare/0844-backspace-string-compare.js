/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    const backspace = (str) => {
        const stack = [];
        for(const x of str){
            if(x === '#' && stack[stack.length-1] !== '#' && stack.length) stack.pop();
            else if(x !== '#') stack.push(x);
        }
        return stack.join('');
    }
    return backspace(s) === backspace(t);
};