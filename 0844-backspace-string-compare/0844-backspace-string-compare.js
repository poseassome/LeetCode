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
        if(stack[0] === '#') stack.shift();
        return stack.join('');
    }
    console.log(backspace(s))
    console.log(backspace(t))
    return backspace(s) === backspace(t);
};