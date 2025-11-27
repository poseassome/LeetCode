/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length === 1) return nums[0];
    const helper = (start, end) => {
        let p2 = p1 = 0;
        for(let i=start; i<=end; i++){
            cur = Math.max(nums[i]+p2, p1);
            p2 = p1;
            p1 = cur;
        }
        return p1;
    };
    return Math.max(helper(0, nums.length-2), helper(1, nums.length-1)); 
};