/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    let stack = [];
    for(const x of num){
        while(k>=1 && stack.length && stack[stack.length-1]>x){
            stack.pop();
            k--;
        }
        stack.push(x);
    }
    while(k>0){
        stack.pop();
        k--;
    }
    while(stack[0] === '0') stack.shift();
    if(!stack.length) stack.push('0');
    return stack.join('');
};