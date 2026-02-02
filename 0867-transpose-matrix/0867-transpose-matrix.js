/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    let stack = [];
    for(let i=0; i<matrix[0].length; i++){
        let res = [];
        for(let j=0; j<matrix.length; j++){
            res.push(matrix[j][i]);
        }
        stack.push(res);
    }
    return stack;
};