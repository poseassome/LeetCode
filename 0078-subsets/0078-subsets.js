/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let res = [];
    const DFS = (cur, idx) => {
        res.push(cur);
        for(let i=idx; i<nums.length; i++){
            DFS(cur.concat(nums[i]), i+1);
        }
    }
    DFS([], 0);
    return res;
};