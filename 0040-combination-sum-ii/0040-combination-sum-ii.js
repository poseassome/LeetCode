/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    if(!candidates.length) return [];
    candidates.sort((a,b) => a-b);
    let res = [];
    
    const DFS = (arr, idx, target) => {
        if(!target) return res.push([...arr]);
        if(target < 0) return;
        for(let i=idx; i<candidates.length; i++){
            if(i !== idx && candidates[i] === candidates[i-1]) continue;
            arr.push(candidates[i]);
            DFS(arr, i+1, target-candidates[i]);
            arr.pop();
        }
    }
    
    DFS([], 0, target);
    return res;
};