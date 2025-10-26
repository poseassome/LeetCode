/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function(s) {
    let stack = [];
    for(const x of s){
        if(x !== ')') stack.push(x);
        else {
            let str = "";
            while(stack.length){
                let e = stack.pop();
                if(e === '(') break;
                str += e;
            }
            for(const c of str){
                stack.push(c)
            }
        }
    }
    let res = "";
    for(const x of stack){
        if(x === '(') continue;
        res += x;
    }
    return res;
};