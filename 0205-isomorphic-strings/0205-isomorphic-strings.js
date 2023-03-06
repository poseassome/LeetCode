/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let sHs = new Map();
    let sHt = new Map();
    for(let i=0; i<s.length; i++){
        if(sHs.has(s[i])){
            if(sHs.get(s[i]) !== t[i]) return false;
        }
        if(sHt.has(t[i])){
            if(sHt.get(t[i]) !== s[i]) return false;
        }
        sHs.set(s[i], t[i]);
        sHt.set(t[i], s[i]);
    }
    return true;
};