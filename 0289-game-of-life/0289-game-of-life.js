/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    let m = board.length, n = board[0].length;
    let next = Array.from({ length: m }, () => Array(n).fill(0));
    let directions = [
        [-1, -1], [-1, 0], [-1, 1],
        [0, -1], [0, 1],
        [1, -1], [1, 0], [1, 1]
    ];
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            let liveCount = 0;
            for(let [di, dj] of directions){
                let x = i + di;
                let y = j + dj;
                if(x >= 0 && x < m && y >= 0 && y < n && board[x][y] === 1) liveCount++;
            }
            if(board[i][j] === 0 && liveCount === 3) next[i][j] = 1;
            else if(board[i][j] === 1){
                if(liveCount === 2 || liveCount === 3) next[i][j] = 1;
            }
        }
    }
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            board[i][j] = next[i][j];
        }
    }
    return board;
};