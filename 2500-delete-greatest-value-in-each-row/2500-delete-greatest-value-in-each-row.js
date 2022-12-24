/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function(grid) {
    let answer = 0;
    grid.map(el => el.sort((a,b) => b-a));
    for(let i=0; i <grid[0].length; i++){
        let max = 0;
        for(let j=0; j<grid.length; j++){
            max = max > grid[j][i] ? max : grid[j][i];
        }
        answer += max;
    }
    return answer;
};