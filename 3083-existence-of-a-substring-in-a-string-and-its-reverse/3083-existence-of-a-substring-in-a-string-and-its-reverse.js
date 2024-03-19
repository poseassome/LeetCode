/**
 * @param {string} s
 * @return {boolean}
 */
var isSubstringPresent = function(s) {
    let reverse = s.split('').reverse().join('');
    for(let i=0; i<s.length-1; i++){
        const str = s[i]+s[i+1];
        if(reverse.includes(str)) return true;
    }
    return false;
};