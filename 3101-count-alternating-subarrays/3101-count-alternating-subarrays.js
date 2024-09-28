/**
 * @param {number[]} nums
 * @return {number}
 */
var countAlternatingSubarrays = function(nums) {
    let total = nums.length, cnt = 0;
    for(let i=1; i<nums.length; i++){
        if(nums[i-1] !== nums[i]) cnt++;
        else {
            total += cnt*(cnt+1)/2;
            cnt = 0;
        }
    }
    total += cnt*(cnt+1)/2;
    return total;
};