/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let res = [];
    
    const DFS = (cur, idx, sum) => {
        if(sum === target) {
            res.push(cur);
            return;
        }
        if(sum > target) return;
        for(let i=idx; i<candidates.length; i++){
            DFS(cur.concat(candidates[i]), i, sum+candidates[i]);
        }
    }
    
    DFS([], 0, 0);
    return res;
};