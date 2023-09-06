/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var canBeEqual = function(s1, s2) {
    const str1 = s1[2]+s1[1]+s1[0]+s1[3], str2 = s1[0]+s1[3]+s1[2]+s1[1], str3 = s1[2]+s1[3]+s1[0]+s1[1];
    return s1 === s2 || str1 === s2 || str2 === s2 || str3 === s2;
};