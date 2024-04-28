/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];
    let set = new Set();
    set.add("+");
    set.add("-");
    set.add("*");
    set.add("/");
    
    for(const x of tokens){
        if(set.has(x)){
            const val2 = stack.pop();
            const val1 = stack.pop();
            if(x === '+'){
                stack.push(val1 + val2);
            } else if(x === '-') {
                stack.push(val1 - val2);
            } else if(x === '*') {
                stack.push(val1 * val2);
            } else {
                let val = val1/val2;
                if(val < 0) val = Math.ceil(val);
                else val = Math.floor(val);
                stack.push(Math.floor(val));
            }
        } else stack.push(parseInt(x));
    }
    return stack.pop();
};