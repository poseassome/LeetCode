/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function(board) {
    const row = board.length, col = board[0].length;
    let cnt = 0;
    for(let i=0; i<row; i++){
        for(let j=0; j<col; j++){
            if(board[i][j] === 'X'){
                if(i>0 && board[i-1][j] === 'X' || j>0 && board[i][j-1] === 'X') continue;
                cnt++;
            }
        }
    }
    return cnt;
};