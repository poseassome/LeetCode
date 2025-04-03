/**
 * @param {string} s
 * @return {number}
 */
var reverseDegree = function(s) {
    let res = 0;
    for(let i=0; i<s.length; i++){
        const idx = s[i].charCodeAt()-97, r = 26-idx;
        res += r*(i+1);
    }
    return res;
};