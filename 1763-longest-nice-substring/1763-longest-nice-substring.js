/**
 * @param {string} s
 * @return {string}
 */
var longestNiceSubstring = function(s) {
    if(s.length < 2) return '';
    const set = new Set(s);
    for(let i=0; i<s.length; i++){
        if(set.has(s[i].toUpperCase()) && set.has(s[i].toLowerCase())) continue;
        let s1 = longestNiceSubstring(s.substring(0, i));
        let s2 = longestNiceSubstring(s.substring(i+1));
        return s1.length >= s2.length ? s1 : s2;
    }
    return s;
};