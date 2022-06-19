/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let answer = 0;
    for(let x of grid){
        for(let y of x){
            if(y < 0) answer++;
        }
    }
    return answer;
};