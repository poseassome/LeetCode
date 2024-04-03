/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let res = [];
    const DFS = (cur, start) => {
        if(cur.length === k){
            res.push(cur);
            return;
        }
        if(cur.length > k) return;
        for(let i=start; i<=n; i++){
            DFS(cur.concat(i), i+1);
        }
    }
    
    DFS([], 1)
    return res;
};