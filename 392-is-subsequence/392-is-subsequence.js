/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    s = s.split("");
    t = t.split("");

    while(t.length){
        if(t[0] === s[0]) {
            s.shift();
            t.shift();
        } else t.shift();
    }
    return s.length === 0;
};