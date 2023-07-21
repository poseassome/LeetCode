/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function(nums) {
    let sum = 0;
    const DFS = (idx, num) => {
        if(idx === nums.length){
            sum += num;
            return;
        }
        DFS(idx+1, num);
        DFS(idx+1, num^nums[idx]);
        return;
    }
    DFS(0, 0);
    return sum;
};