/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    const len = nums.length;
    let left = 0, right = len-1;
    while(left <= right){
        const mid = left + Math.floor((right-left)/2);
        if(nums[mid] === target) return mid;
        if(nums[left] <= nums[mid]){
            if(nums[mid] > target && nums[left] <= target) right = mid-1;
            else left = mid + 1;
        } else {
            if(nums[mid] < target && target <= nums[right]) left = mid+1;
            else right = mid-1;
        }
    }
    return -1;
};