/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
    if(s.length === 1) return 1;
    let res = 0;
    const stack = [];
    for(let i=0; i<s.length; i++){
        if(s[i] === '(') stack.push('(');
        else if(!stack.length) res++;
        else stack.pop();
    }
    return stack.length + res;
};