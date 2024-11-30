/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
    let stack = [], set = new Set();
    Array.from(s, (letter, i) => {
        if(!set.has(letter)){
            while(stack.length && letter<stack[stack.length-1] && s.indexOf(stack[stack.length-1], i)>i){
                set.delete(stack.pop());
            }
            stack.push(letter);
            set.add(letter);
        }
    })
    return stack.join('');
};