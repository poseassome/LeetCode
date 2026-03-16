/**
 * @param {number[]} nums
 * @return {number}
 */
var firstUniqueEven = function(nums) {
    for(let i=0; i<nums.length; i++){
        if(nums[i]%2 !== 0) continue;
        let cnt = 0;
        for(let j=0; j<nums.length; j++){
            if(nums[i] === nums[j]) cnt++;
        }
        if(cnt === 1) return nums[i];
    }
    return -1;
};