/**
 * @param {string} pattern
 * @return {string}
 */
var smallestNumber = function(pattern) {
    let res = [], stack = [];
    let num = 1;
    for(let i=0; i<=pattern.length; i++){
        stack.push(num++);
        if(i === pattern.length || pattern[i] === 'I'){
            while(stack.length) res.push(stack.pop());
        }
    }
    return res.join('');
};