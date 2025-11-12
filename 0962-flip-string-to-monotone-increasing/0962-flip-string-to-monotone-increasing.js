/**
 * @param {string} s
 * @return {number}
 */
var minFlipsMonoIncr = function(s) {
    const stack = [];
    let res = 0;
    for(let i=0; i<s.length; i++){
        if(stack.length && s[i]<stack[stack.length - 1]){
            stack.pop();
            res++;
            continue;
        }
        stack.push(s[i]);
    }
    return res; 
};