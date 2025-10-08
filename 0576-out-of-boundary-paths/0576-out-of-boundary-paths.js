/**
 * @param {number} m
 * @param {number} n
 * @param {number} maxMove
 * @param {number} startRow
 * @param {number} startColumn
 * @return {number}
 */
var findPaths = function(m, n, maxMove, startRow, startColumn) {
    let dirs = [[1,0], [-1,0], [0,-1], [0,1]]
    let mod = 10**9 + 7;
    let map = new Map();
    let helper = (i, j, left) => {
        let key = `${i}*${j}*${left}`
        if(map.has(key)) return map.get(key);
        if(i >= m) return 1;
        if(i < 0) return 1;
        if(j >= n) return 1;
        if(j < 0) return 1;
        if(left === 0) return 0;
        let res = 0;
        for(let [r, c] of dirs){
            res = (res+helper(i+r, j+c, left-1))%mod;
        }
        map.set(key, res);
        return res;
    }
    return helper(startRow, startColumn, maxMove);
};