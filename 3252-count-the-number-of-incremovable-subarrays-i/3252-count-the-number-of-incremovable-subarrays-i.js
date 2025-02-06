/**
 * @param {number[]} nums
 * @return {number}
 */
var incremovableSubarrayCount = function(nums) {
    const len = nums.length;
    let cnt = 0;
    const isIncremovable = (start, end) => {
        let prev = -Infinity;
        for(let i=0; i<len; i++){
            if(i < start || i > end){
                if(nums[i] <= prev) return false;
                prev = nums[i];
            }
        }
        return true;
    }

    for(let i=0; i<len; i++){
        for(let j=i; j<len; j++){
            if(isIncremovable(i, j)) cnt++;
        }
    }
    return cnt;
};