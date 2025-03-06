/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const n = board.length, m = board[0].length;
    const search = (idx, row, col) => {
        if(idx === word.length) return true;
        if(row < 0 || row >= n || col < 0 || col >= m) return false;
        if(board[row][col] === word[idx]){
            board[row][col] = 'already visited';
            let res = search(idx+1, row, col+1)
                ||search(idx+1, row+1, col)
                || search(idx+1, row, col-1)
                || search(idx+1, row-1, col);
            board[row][col] = word[idx];
            return res;
        }
        return false;
    }

    for(let i=0; i<n; i++){
        for(let j=0; j<m; j++){
            if(board[i][j] === word[0] && search(0, i, j)) return true;
        }
    }
    return false;
 };