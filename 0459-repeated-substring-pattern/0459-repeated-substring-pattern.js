/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    if(s.length < 2) return false;
    let str = '';
    for(let i=0; i<s.length/2; i++){
        str += s[i];
        if(!s.split(str).join('').length) return true;
    }
    return false;
};