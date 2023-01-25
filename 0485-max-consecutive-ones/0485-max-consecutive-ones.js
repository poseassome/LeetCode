/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let max = 0;
    let cnt = 0;
    for(const x of nums){
        if(x === 0){
            max = Math.max(max, cnt);
            cnt = 0;
        } else cnt++;
    }
    return Math.max(max, cnt);
};