/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasSpecialSubstring = function(s, k) {
    let cnt = 0;
    for(let i=0; i<s.length; i++){
        if(i === 0 || s[i] === s[i-1]) cnt++;
        else cnt = 1;
        if(cnt === k && (i === s.length-1 || s[i] !== s[i+1])) return true;
    }
    return false;
};