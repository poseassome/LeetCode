/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function(n) {
    let [cur, copy, steps] = [1, 0, 0];
    while(cur !== n){
        if(copy < cur && (n-cur)%cur === 0) copy = cur;
        else cur += copy;
        steps++;
    }
    return steps;
};