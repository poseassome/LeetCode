/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    let left = 0, right = nums.length-1;
    while(left <= right){
        const mid = Math.floor((left+right)/2);
        if(nums[mid] === target) return true;
        if(nums[mid] === nums[left] && nums[mid] === nums[right]){
            left = left+1;
            right = right-1;
            continue;
        }
        if(nums[mid] <= nums[right]){
            if(nums[mid] <= target && nums[right] >= target) left = mid+1;
            else right = mid-1;
        }else{
            if(nums[mid] >= target && nums[left] <= target) right = mid-1;
            else left = mid+1;
        }
    }
    return false;
};