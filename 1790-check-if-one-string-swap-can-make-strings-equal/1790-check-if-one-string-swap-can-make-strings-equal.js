/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
    let different = [];
    for(let i=0; i<s1.length; i++){
        if(s1[i] !== s2[i]) different.push(i);
    }
    if(different.length>2) return false;
    const [a, b] = different;
    return s1[b] === s2[a] && s1[a] === s2[b];
};