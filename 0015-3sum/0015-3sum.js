/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let res = [];
    nums.sort((a,b) => a-b);
    for(let i=0; i<nums.length-2; i++){
        if(i !== 0 && nums[i] === nums[i-1]) continue;
        let left = i+1;
        let right = nums.length-1;
        let curr = nums[i];
        while(left < right){
            let currSum = curr + nums[left] + nums[right];
            if(currSum === 0){
                res.push([nums[i], nums[left], nums[right]]);
                while(left < right && nums[left] === nums[left+1]) left++;
                while(left < right && nums[right] === nums[right-1]) right--;
                left++;
                right--;
            } else if(currSum < 0) left++;                
            else right--;
        }
    }
    return res;
};