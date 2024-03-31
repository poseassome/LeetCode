/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const [H, W] = [grid.length, grid[0].length];
    let cnt = 0;
    
    const DFS = (y, x) => {
        if(grid[y][x] !== '1') return;
        grid[y][x] = 'v';
        if(y > 0) DFS(y-1, x);
        if(y+1 < H) DFS(y+1, x);
        if(x > 0) DFS(y, x-1);
        if(x+1 < W) DFS(y, x+1);
    }
    
    for(let y=0; y<H; y++){
        for(let x=0; x<W; x++){
            if(grid[y][x] === '1'){
                cnt++;
                DFS(y, x);
            }
        }
    }
    
    return cnt;
};