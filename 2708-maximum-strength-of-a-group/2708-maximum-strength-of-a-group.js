/**
 * @param {number[]} nums
 * @return {number}
 */
var maxStrength = function(nums) {
    if(nums.length === 1) return nums[0];
    const positive = nums.filter(el => el>0);
    const negative = nums.filter(el => el<0).sort((a,b) => a-b);
    if(!positive.length && negative.length <= 1) return 0;
    if(negative.length%2 === 1) negative.pop();
    const res = [...positive, ...negative];
    return res.reduce((acc, cur) => acc*cur, 1);
};