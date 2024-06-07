/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
    nums.sort((a,b) => a-b);
    let res = new Array(nums.length);
    let lastIdx = nums.length-1;
    for(let i=1; i<nums.length; i+=2){
        res[i] = nums[lastIdx--];
    }
    for(let i=0; i<nums.length; i+=2){
        res[i] = nums[lastIdx--];
    }
    for(let i=0; i<nums.length; i++){
        nums[i] = res[i];
    }
    return res;
};