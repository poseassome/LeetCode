/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function(nums) {
    let cnt = 0, res = 0;
    nums.forEach(el => {
        if(el === 0) cnt++;
        else cnt = 0;
        res += cnt;
    })
    return res;
};