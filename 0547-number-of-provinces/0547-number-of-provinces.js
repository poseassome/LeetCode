/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    let cnt = 0;
    for(let row=0; row<isConnected.length; row++){
        if(isConnected[row][0] !== -1){
            cnt++;
            Found(row);
        }
    }
    return cnt;
    
    function Found(row) {
        for(let col=0; col<isConnected.length; col++){
            if(isConnected[row][col] === 1){
                isConnected[row][col] = -1;
                Found(col);
            }
            if(col === 0) isConnected[row][col] = -1;
        }
    }
};