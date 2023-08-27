/**
 * @param {string} moves
 * @return {number}
 */
var furthestDistanceFromOrigin = function(moves) {
    let left = 0, right = 0, under = 0;
    for(const x of moves){
        if(x === 'L') left++;
        if(x === 'R') right++;
        if(x === '_') under++;
    }
    return Math.max(left, right)-Math.min(left, right)+under;
};