/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumRightShifts = function(nums) {
    let cnt = 0;
    const isSorted = nums => {
        for(let i=0; i<nums.length-1; i++){
            if(nums[i+1] < nums[i]) return false;
        }
        return true;
    }
    
    if(isSorted(nums)) return cnt;
    for(let i=nums.length-1; i>=0; i--){
        const right = nums.pop();
        nums.unshift(right);
        cnt++;
        if(isSorted(nums)) return cnt;
    }
    return -1;
};