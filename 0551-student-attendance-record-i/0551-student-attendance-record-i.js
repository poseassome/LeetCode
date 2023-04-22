/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    const sH = new Map();
    let cnt = 0;
    for(const x of s){
        if(x === 'L') cnt++;
        else cnt = 0;
        sH.set(x, (sH.get(x) || 0)+1);
        if(sH.get('A') >= 2 || cnt === 3) return false;
    }
    return true;
};