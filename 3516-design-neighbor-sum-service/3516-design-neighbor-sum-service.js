/**
 * @param {number[][]} grid
 */
var NeighborSum = function(grid) {
    this.map = new Map;
    for(let i=0; i<grid.length; i++){
        for(let j=0; j<grid[i].length; j++){
            this.map.set(grid[i][j], [i, j]);
        }
    }
    this.grid = grid;
};

/** 
 * @param {number} value
 * @return {number}
 */
NeighborSum.prototype.adjacentSum = function(value) {
    let [i, j] = this.map.get(value);
    let res = 0;
    if(i>0) res += this.grid[i-1][j];
    if(j>0) res += this.grid[i][j-1];
    if(i<this.grid.length-1) res += this.grid[i+1][j];
    if(j<this.grid[0].length-1) res += this.grid[i][j+1];
    return res;
};

/** 
 * @param {number} value
 * @return {number}
 */
NeighborSum.prototype.diagonalSum = function(value) {
    let [i, j] = this.map.get(value);
    let res = 0;
    if(i>0 && j>0) res += this.grid[i-1][j-1];
    if(j>0 && i<this.grid.length-1) res += this.grid[i+1][j-1];
    if(i<this.grid.length-1 && j<this.grid[0].length-1) res += this.grid[i+1][j+1];
    if(i>0 && j<this.grid[0].length-1) res += this.grid[i-1][j+1];
    return res;
};

/** 
 * Your NeighborSum object will be instantiated and called as such:
 * var obj = new NeighborSum(grid)
 * var param_1 = obj.adjacentSum(value)
 * var param_2 = obj.diagonalSum(value)
 */