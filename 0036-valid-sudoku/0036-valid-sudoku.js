/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    // Row check
    for(const row of board){
        let nums = [];
        for(cell of row){
            if(!nums.includes(cell) && cell !== ".") nums.push(cell);
            else if(nums.includes(cell) && cell !== ".") return false;
        }
    }
    // Column check
    for(let i=0; i<9; i++){
        nums = [];
        for(cell of board){
            if(!nums.includes(cell[i])&& cell[i] !== ".") nums.push(cell[i]);
            else if(nums.includes(cell[i]) && cell[i] !== ".") return false;
        }
    }
    // Box check
    nums =[];
    for(let line=0; line<3; line++){
        for(let col=0; col<3; col++){
            let nums = [];
            let startX = line*3;
            let startY = col*3;
            for(let x=startX; x<startX+3; x++){
                for (let y=startY; y<startY+3; y++){
                    let cell = board[x][y];
                    if(cell !== "."){
                        if (nums.includes(cell)) return false;
                        else nums.push(cell);
                    }
                }
            }
        }
    }
    return true;
};