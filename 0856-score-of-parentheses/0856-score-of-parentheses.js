/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function(s) {
    const stack = [];

    for(const x of s) {
        let currScore = 0;
        if(x === ")"){
            if(stack.length && stack[stack.length-1] === 0){
                stack.pop();
                currScore++;
            } else {
                while(stack.length && stack[stack.length-1]) currScore += stack.pop();
                stack.pop();
                currScore *= 2
            }
        }
        stack.push(currScore);
    }
    return stack.reduce((acc, cur) => acc + cur, 0)
};