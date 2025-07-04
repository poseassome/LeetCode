/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
var countSubIslands = function(grid1, grid2) {
    const DFS = (i, j) => {
        if(i<0 || j<0 || i>=grid2.length || j>=grid2[0].length || grid2[i][j] === 0) return;
        grid2[i][j] = 0;
        DFS(i+1, j);
        DFS(i-1, j);
        DFS(i, j+1);
        DFS(i, j-1);
    }
    for(let i=0; i<grid2.length; i++){
        for(let j=0; j<grid2[0].length; j++){
            if(grid1[i][j] === 0 && grid2[i][j] === 1) {
                DFS(i, j);
            }
        }
    }
    let cnt = 0;
    for(let i=0; i<grid2.length; i++){
        for(let j=0; j<grid2[0].length; j++){
            if(grid2[i][j] === 1){
                cnt++;
                DFS(i, j);
            }
        }
    }
    return cnt;
};