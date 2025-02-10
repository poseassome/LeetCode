/**
 * @param {number} n
 * @return {boolean}
 */
var canAliceWin = function(n) {
    let cnt = 10, turn = 0;
    while(n >= cnt){
        n -= cnt;
        cnt--;
        turn++;
    }
    if(turn%2 === 0) return false;
    return true;
};