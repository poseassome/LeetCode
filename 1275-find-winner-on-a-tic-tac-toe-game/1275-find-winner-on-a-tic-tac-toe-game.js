/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function(moves) {
    const grid = Array.from({ length: 3 }, () => Array(3).fill(''));
    let currentPlayer = 'A';

    const checkWinner = (grid, row, col, player) => {
        if (grid[row].every(cell => cell === player)) return true;
        if (grid.every(row => row[col] === player)) return true;
        if (row === col && grid.every((_, idx) => grid[idx][idx] === player)) return true;
        if (row + col === 2 && grid.every((_, idx) => grid[idx][2 - idx] === player)) return true;
        return false;
    }

    for(const [row, col] of moves) {
        grid[row][col] = currentPlayer;
        if(checkWinner(grid, row, col, currentPlayer)) return currentPlayer;
        currentPlayer = currentPlayer === 'A' ? 'B' : 'A';
    }

    return moves.length === 9 ? "Draw" : "Pending";
};