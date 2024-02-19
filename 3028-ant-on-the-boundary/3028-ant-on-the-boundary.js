/**
 * @param {number[]} nums
 * @return {number}
 */
var returnToBoundaryCount = function(nums) {
    let sum = 0, cnt = 0;
    for(const x of nums){
        sum += x;
        if(sum === 0) cnt++;
    }
    return cnt;
};