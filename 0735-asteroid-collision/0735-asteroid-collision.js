/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    let stack = [];

    for(const x of asteroids){
        let top = stack[stack.length-1];

        if(!stack.length || x > 0 || top <0) stack.push(x);
        else {
            while(stack.length && stack[stack.length-1] > 0 && stack[stack.length-1] < Math.abs(x)) {
                stack.pop();
            }
            if(stack.length && stack[stack.length-1] === Math.abs(x)) stack.pop();
            else if(!stack.length || stack[stack.length-1] < 0) stack.push(x);
        }
    }

    return stack;
};