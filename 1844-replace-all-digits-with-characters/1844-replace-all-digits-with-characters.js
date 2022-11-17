/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function(s) {
    s = s.split('');
    for(let i=0; i<s.length && s[i+1]; i+=2){
        s[i+1] = String.fromCharCode(s[i].charCodeAt()+Number(s[i+1]));
    }
    return s.join('');
};