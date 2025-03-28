/**
 * @param {number[]} nums
 * @return {number}
 */
var countValidSelections = function(nums) {
    const sum = nums.reduce((acc, cur) => acc+cur);
    let cnt = 0, leftSum = 0;
    for(const x of nums){
        if(x === 0){
            if(leftSum*2 === sum) cnt += 2;
            else if(Math.abs(leftSum*2-sum) === 1) cnt++;
        } else leftSum += x;
    }
    return cnt;
};