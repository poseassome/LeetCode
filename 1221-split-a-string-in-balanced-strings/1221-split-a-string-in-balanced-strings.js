/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let cnt = 0, balance = 0;
    
    for (let i=0; i<s.length; i++) {
        if (s[i] === 'R') balance++;
        else balance--;
        if (balance === 0) cnt++;
    }
    return cnt;
};