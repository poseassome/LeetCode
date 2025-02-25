/**
 * @param {string} s
 * @return {boolean}
 */
var hasSameDigits = function(s) {
    while(s.length > 2){
        let str = '';
        for(let i=1; i<s.length; i++){
            str += (Number(s[i-1]) + Number(s[i])) % 10;
        }
        s = str;
    }
    return s[1] === s[0];
};