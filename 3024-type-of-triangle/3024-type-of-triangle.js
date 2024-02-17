/**
 * @param {number[]} nums
 * @return {string}
 */
var triangleType = function(nums) {
    const bool = (a, b, c) => {
        if(a+b>c && a+c>b && b+c>a) return true;
        return false;
    }
    
    const set = new Set(nums);
    if(!bool(nums[0], nums[1], nums[2])) return "none";
    if(set.size === 3) return "scalene";
    if(set.size === 2) return "isosceles";
    if(set.size === 1) return "equilateral";
};