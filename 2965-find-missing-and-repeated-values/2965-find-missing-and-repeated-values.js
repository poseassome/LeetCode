/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function(grid) {
    const len = grid.length;
    let a, b;
    const set = new Set();
    
    for(let i=0; i<len; i++){
        for(let j=0; j<len; j++){
            const val = grid[i][j];
            if(set.has(val)) a = val;
            set.add(val);
        }
    }
    for(let k=1; k<=len*len; k++){
        if(!set.has(k)){
            b = k;
            break;
        }
    }
    return [a, b];
};