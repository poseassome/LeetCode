/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
    if(s.length <= 1) return 0;
    let prev = 0;
    let cur = 1;
    let cnt = 0;
    for(let i=1; i<s.length; i++){
        if(s[i-1] === s[i]) cur++;
        else {
            prev = cur;
            cur = 1;
        }
        if(prev >= cur) cnt++;
    }
    return cnt;
};