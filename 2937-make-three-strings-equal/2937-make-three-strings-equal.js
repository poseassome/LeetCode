/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {number}
 */
var findMinimumOperations = function(s1, s2, s3) {
    let len = Math.min(s1.length, s2.length, s3.length);
    let sum = s1.length + s2.length + s3.length;
    
    if(s1[0] !== s2[0] || s1[0] !== s3[0] || s2[0] !== s3[0]) return -1;
    for(let i=0; i<len; i++){
        if(s1[i] === s2[i] && s2[i] === s3[i]) sum -= 3;
        else break;
    }
    return sum;
};