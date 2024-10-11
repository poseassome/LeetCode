/**
 * @param {string} s
 * @param {character} c
 * @return {number}
 */
var countSubstrings = function(s, c) {
    let res = 0, seen = 0;
    for(let i=0; i<s.length; i++){
        if(s[i] === c){
            res++;
            res += seen;
            seen++;
        }
    }
    return res;
};