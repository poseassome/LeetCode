/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    let min = 0, max = 0;
    if(s[0] === ')') return false;
    for(const x of s){
        if(x === '('){
            min++;
            max++;
        } else if(x === ')'){
            min--;
            max--;
        } else {
            min--;
            max++;
        }
        if(min < 0) min = 0;
        if(max < 0) return false;
    }
    return min === 0;
};