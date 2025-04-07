/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let len = nums.length, i, j;
    for(i=len-2; i>=0; i--){
        if(nums[i] < nums[i+1]) break;
    }
    if(i >= 0){
        for(j=len-1; j>i; j--){
            if(nums[j] > nums[i]){
                [nums[i], nums[j]] = [nums[j], nums[i]];
                break;
            }
        }
    }
    let left = i+1, right = len-1;
    while(left < right){
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }
};