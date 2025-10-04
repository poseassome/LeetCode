/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    const notSurrounded = new Set();
    const m = board.length, n = board[0].length;
    const DFS = (i, j) => {
        if(notSurrounded.has(`${i}-${j}`)) return;
        if(i < 0 || j < 0 || i >= m || j >= n || board[i][j] === 'X') return;
        notSurrounded.add(`${i}-${j}`);
        DFS(i, j+1);
        DFS(i, j-1);
        DFS(i+1, j);
        DFS(i-1, j);
    }

    for(let i=0; i<n; i++){
        DFS(0, i);
        DFS(m-1, i);
    }
    for(let i=0; i<m; i++){
        DFS(i, 0);
        DFS(i, n-1);
    }
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            if(board[i][j] === 'O' && !notSurrounded.has(`${i}-${j}`)) board[i][j] = 'X';
        }
    }
};