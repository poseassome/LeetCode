/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let cnt = 1;
    for(let i=1; i<nums.length; i++){
        if(nums[i] !== nums[i-1]){
            nums[cnt] = nums[i];
            cnt++;
        }
    }
    nums = nums.slice(0, cnt);
    return cnt;
};