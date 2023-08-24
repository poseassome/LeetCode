/**
 * @param {number[]} player1
 * @param {number[]} player2
 * @return {number}
 */
var isWinner = function(player1, player2) {
    const score = player => {
        let sum = 0;
        for(let i=0; i<player.length; i++){
            let int = player[i];
            if((i>0 && player[i-1] === 10) || (i>1 && player[i-2] === 10)) int *= 2;
            sum += int;
        }
        return sum;
    }
    
    const p1 = score(player1);
    const p2 = score(player2);
    if(p1 > p2) return 1;
    if(p2 > p1) return 2;
    return 0;
};