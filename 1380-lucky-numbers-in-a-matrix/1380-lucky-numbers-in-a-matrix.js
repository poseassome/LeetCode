/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers  = function(matrix) {
    let answer = [];    
    for(let i=0; i<matrix.length; i++){
        const minRow = Math.min(...matrix[i]);
        const idx = matrix[i].findIndex(el => el === minRow);
        let max = 0;
        matrix.forEach(el => {
            max = Math.max(el[idx], max)
        })
        if(matrix[i][idx] === max) answer.push(minRow);
    }
    return answer;
};