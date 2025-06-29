/**
 * @param {number[][]} isWater
 * @return {number[][]}
 */
var highestPeak = function(isWater) {
    const row = isWater.length; col = isWater[0].length;
    let res = Array.from({length: row}, () => Array(col).fill(-1));
    let queue = [];
    for(let i=0; i<row; i++){
        for(let j=0; j<col; j++){
            if(isWater[i][j] === 1){
                queue.push([i, j]);
                res[i][j] = 0;
            }
        }
    }

    let direction = [[0,1], [1,0], [0,-1], [-1,0]];
    while(queue.length){
        const len = queue.length;
        let temp = [];
        for(let i=0; i<len; i++){
            let [r, c] = queue.pop();
            for(let [dR, dC] of direction){
                let curR = r + dR;
                let curC = c + dC;
                if(curR >= 0 && curC >= 0 && curR < row && curC < col && res[curR][curC] === -1){
                    res[curR][curC] = res[r][c] + 1;
                    temp.push([curR, curC]);
                }
            }
        }
        queue = temp;
    }
    return res;
};