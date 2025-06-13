/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkIfCanBreak = function(s1, s2) {
    const compare = (str1, str2) => {
        if(str1.length !== str2.length) return false;
        for(let i=0; i<str1.length; i++){
            if(str1[i] > str2[i]) return false;
        }
        return true;
    }

    s1 = s1.split('').sort().join('');
    s2 = s2.split('').sort().join('');
    if(compare(s1, s2) || compare(s2, s1)) return true;
    return false;
};