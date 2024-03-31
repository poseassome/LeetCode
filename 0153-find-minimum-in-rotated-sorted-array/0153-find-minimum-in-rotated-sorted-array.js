/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let left = 0, right = nums.length-1;
    let min = Number.MAX_SAFE_INTEGER;
    while(left <= right){
        let mid = left+Math.floor((right-left)/2);
        if(nums[left] <= nums[mid]){
            min = Math.min(min, nums[left]);
            left = mid+1;
        } else {
            min = Math.min(min, nums[mid]);
            right = mid-1;
        }
    }
    return min;
};