/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    s = s.split('');
    t = t.split('');
    for(let i=0; i<s.length; i++){
        if(t.includes(s[i])){
            t.splice(t.indexOf(s[i]), 1);
            s.splice(i, 1);
            i--;
        }
    }
    return s.length > 0 || t.length > 0 ? false : true;
};