/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayNesting = function(nums) {
    const DFS = n => {
        if(n === -1) return -1;
        const next = nums[n];
        nums[n] = -1;
        return 1+DFS(next);
    }
    let res = 0;
    for(const n of nums){
        res = Math.max(res, DFS(n));
    }
    return res;
};