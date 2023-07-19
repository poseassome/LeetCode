/**
 * @param {number[]} nums
 * @return {number}
 */
var alternatingSubarray = function(nums) {
    let max = -1;
    for(let i=0; i<nums.length-1; i++){
        if(nums[i+1]-nums[i] === 1){
            let long = 2;
            for(let j=i+2; j<nums.length; j++){
                if(j < nums.length && nums[j] === nums[j-2]) long++;
                else break;
            }
            max = Math.max(max, long);
        }
    }
    return max;
};