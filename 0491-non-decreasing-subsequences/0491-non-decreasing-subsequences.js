/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
    let res = [], map = {};
    const DFS = (idx, arr) => {
        if(map[arr]) return;
        if(arr.length >= 2) res.push(arr);
        for(let i=idx; i<nums.length; i++){
            if(arr[arr.length-1] > nums[i]) continue;
            map[arr] = true;
            DFS(i+1, [...arr, nums[i]]);
        }
    }
    DFS(0, []);
    return res;
};