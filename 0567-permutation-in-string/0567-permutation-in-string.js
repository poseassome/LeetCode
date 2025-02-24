/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if(s1.length > s2.length) return false;
    let arr1 = new Array(26).fill(0), arr2 = new Array(26).fill(0);
    for(const x of s1){
        arr1[x.charCodeAt()-97]++;
    }
    for(let i=0, j=0; i<s2.length; i++){
        arr2[s2[i].charCodeAt()-97]++;
        if(i-j+1 > s1.length) arr2[s2[j++].charCodeAt()-97]--;
        if(arr2.toString() === arr1.toString()) return true;
    }
    return false;
};