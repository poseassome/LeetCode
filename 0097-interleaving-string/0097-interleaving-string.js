/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
    let m = s1.length, n = s2.length, k = s3.length;
    if(m+n !== k)  return false;
    const map = {};
    const DFS = (i, j) => {
        if(i === m && j === n) return true;
        const key = i + "," + j;
        if(key in map) return map[key];
        const k = i + j;
        let res = false;
        if(i < m && s1[i] === s3[k] && DFS(i+1, j)) res = true;
        if(j < n && s2[j] === s3[k] && DFS(i, j+1)) res = true;
        map[key] = res;
        return res;
    }
    return DFS(0, 0);
};