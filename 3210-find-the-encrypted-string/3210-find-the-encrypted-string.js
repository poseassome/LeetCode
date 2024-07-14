/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var getEncryptedString = function(s, k) {
    let res = '';
    for(let i=0; i<s.length; i++){
        res += s[(i+k)%s.length];
    }
    return res;
};