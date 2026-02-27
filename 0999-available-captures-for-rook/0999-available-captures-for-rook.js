/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function(board) {
    let result = 0;
    let rook = [0, 0];

    for(let i=0; i<board.length; i++){
        for(let j=0; j<board[i].length; j++){
            if(board[i][j] === "R"){
                rook = [i, j];
                break;
            }
        }
    }

    for(let i=rook[1]; i>=0; i--){
        if(board[rook[0]][i] === "B") break;
        if(board[rook[0]][i] === "p"){
            result++;
            break;
        }
    }

    for(let i=rook[1]; i<8; i++){
        if(board[rook[0]][i] === "B") break;
        if(board[rook[0]][i] === "p"){
            result++;
            break;
        }
    }

    for(let i=rook[0]; i>=0; i--){
        if(board[i][rook[1]] === "B") break;
        if(board[i][rook[1]] === "p"){
            result++;
            break;
        }
    }

     for(let i=rook[0]; i<8; i++){
        if(board[i][rook[1]] === "B") break;
        if(board[i][rook[1]] === "p"){
            result++;
            break;
        }
    }
    return result;
};