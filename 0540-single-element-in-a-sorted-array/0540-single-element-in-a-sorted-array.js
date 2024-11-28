/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let start = 0, end = nums.length-1;
    while(start < end){
        const mid = Math.floor((start+end)/2);
        const even = !(mid%2);
        if(nums[mid] !== nums[mid+1] && nums[mid] !== nums[mid-1]) return nums[mid];
        ((even && nums[mid] === nums[mid-1]) || (!even && nums[mid] === nums[mid+1])) ? end = mid-1 : start = mid+1;
    }
    return nums[start];
};