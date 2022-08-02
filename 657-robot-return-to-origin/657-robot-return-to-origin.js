/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let sH = new Map();
    for (const x of moves){
        sH.set(x, (sH.get(x) || 0)+1);
    }
    return (sH.get('L') === sH.get('R') && sH.get('U') == sH.get('D')) ? true : false;
};