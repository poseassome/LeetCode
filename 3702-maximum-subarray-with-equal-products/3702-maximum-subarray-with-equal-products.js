/**
 * @param {number[]} nums
 * @return {number}
 */
var maxLength = function(nums) {
    const gcd = (nums, b) => {
        while(b){
            [nums, b] = [b, nums%b];
        }
        return nums;
    }
    const lcm = (nums, b) => {
        return (nums*b) / gcd(nums, b);
    }

    let maxLen = 0;
    for(let i=0; i<nums.length; i++){
        let prod = 1;
        let g = nums[i], l = nums[i];
        for(let j=i; j<nums.length; j++){
            prod *= nums[j];
            g = gcd(g, nums[j]);
            l = lcm(l, nums[j]);
            if(prod === g*l) maxLen = Math.max(maxLen, j-i+1);
        }
    }
    return maxLen;
};