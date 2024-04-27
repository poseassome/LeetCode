/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let res = [], cnt = 1;
    for(let i=0; i<nums.length; i++){
        res.push(cnt);
        cnt *= nums[i];
    }
    cnt = 1;
    for(let i=nums.length-1; i>=0; i--){
        res[i] = res[i]*cnt;
        cnt *= nums[i];
    }
    return res;
};