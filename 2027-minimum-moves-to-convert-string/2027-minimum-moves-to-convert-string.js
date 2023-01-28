/**
 * @param {string} s
 * @return {number}
 */
var minimumMoves = function(s) {
    let cnt = 0;
    for(let i=0; i<s.length; i++){
        if(s[i] === 'X'){
            cnt++;
            i += 2;
        }
    }
    return cnt;
};