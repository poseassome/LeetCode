/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
    let set = new Set();
    nums.sort((a,b) => a-b);
    for(let i=0; i<nums.length-1; i++){
        if(i>0 && nums[i] === nums[i-1]) continue;
        for(let j=i+1; j<nums.length; j++){
            if(Math.abs(nums[i]-nums[j]) === k) set.add(nums[i]+':'+nums[j]);
            else if(Math.abs(nums[i]-nums[j]) > k) break;
        }
    }
    return set.size;
};