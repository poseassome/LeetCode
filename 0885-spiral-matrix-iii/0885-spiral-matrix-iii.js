/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rStart
 * @param {number} cStart
 * @return {number[][]}
 */
var spiralMatrixIII = function(rows, cols, rStart, cStart) {
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    const result = [];
    let steps = 1;
    let d = 0;
    
    result.push([rStart, cStart]);
    
    while(result.length < rows*cols){
        for(let i=0; i<2; i++){
            for(let j=0; j<steps; j++){
                rStart += directions[d][0];
                cStart += directions[d][1];
                if(rStart >= 0 && rStart < rows && cStart >= 0 && cStart < cols) result.push([rStart, cStart]);
            }
            d = (d+1) % 4;
        }
        steps++;
    }
    return result;
};