/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let stack = [];
    for(const x of s){
        if(x !== ']') stack.push(x);
        else {
            let str = '';
            while(stack[stack.length-1] !== '[') str = stack.pop() + str;
            stack.pop();
            let num = '';
            while(!isNaN(stack[stack.length-1])) num = stack.pop() + num;
            let res = '';
            for(let i=0; i<num; i++) res += str;
            stack.push(res);
        }
    }
    return stack.join('');
};