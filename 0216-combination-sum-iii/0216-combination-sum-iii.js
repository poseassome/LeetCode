/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    let res = [];
    const DFS = (arr, idx, n) => {
        if(n<0 || arr.length>k) return;
        if(n === 0 && arr.length === k) return res.push([...arr]);
        for(let i=idx; i<=9; i++){
            DFS([...arr, i], i+1, n-i);
        }
    }
    DFS([], 1, n);
    return res;
};