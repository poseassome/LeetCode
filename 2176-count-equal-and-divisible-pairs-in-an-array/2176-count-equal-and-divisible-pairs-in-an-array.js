/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countPairs = function(nums, k) {
    let cnt = 0;
    for(let i=0; i<nums.length; i++){
        for (let j=i+1; j<nums.length; j++){
            if(nums[i] === nums[j] && (i*j)%k === 0) cnt++;
        }
    }
    return cnt;
};