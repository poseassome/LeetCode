/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    const v1 = version1.split('.');
    const v2 = version2.split('.');
    const len = Math.max(v1.length, v2.length);
    for(let i=0; i<len; i++){
        const val1 = i >= v1.length ? 0 : parseInt(v1[i]);
        const val2 = i >= v2.length ? 0 : parseInt(v2[i]);
        if(val1 !== val2) return val1 > val2 ? 1 : -1;
    }
    return 0;
};