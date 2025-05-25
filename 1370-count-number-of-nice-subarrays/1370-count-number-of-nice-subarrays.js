/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
    let left = right = odd = res = prefix = 0;
    while(right<nums.length){
        if(nums[right]%2 !== 0){
            odd++;
            prefix = 0;
        }
        while(odd === k){
            if(nums[left]%2 !== 0) odd--;
            prefix++;
            left++;
        }
        res += prefix;
        right++;
    }
    return res;
};