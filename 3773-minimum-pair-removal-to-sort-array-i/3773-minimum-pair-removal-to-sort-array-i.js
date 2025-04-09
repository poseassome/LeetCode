/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumPairRemoval = function(nums) {
    let cnt = 0;
    const isSortedIncreasing = nums => {
        for(let i=0; i<nums.length-1; i++){
            if(nums[i] > nums[i+1]) return false;
        }
        return true;
    }
    while(!isSortedIncreasing(nums)){
        let minSum = Infinity, idx = -1;
        for(let i=0; i<nums.length-1; i++){
            const sum = nums[i] + nums[i+1];
            if(minSum > sum){
                minSum = sum;
                idx = i;
            }
        }
        nums.splice(idx, 2, minSum);
        cnt++;
    }
    return cnt;
};