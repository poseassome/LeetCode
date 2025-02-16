/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var countKConstraintSubstrings = function(s, k) {
    let cnt = 0;
    for(let i=0; i<s.length; i++){
        for(let j=i+1; j<=s.length; j++){
            const subStr = s.slice(i, j);
            const zero = subStr.replaceAll(/1/g, "");
            const one = subStr.replaceAll(/0/g, "");
            if(zero.length <= k || one.length <= k) cnt++;
            else break;
        }
    }
    return cnt;
};