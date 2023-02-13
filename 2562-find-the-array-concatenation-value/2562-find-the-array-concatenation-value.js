/**
 * @param {number[]} nums
 * @return {number}
 */
var findTheArrayConcVal = function(nums) {
    let concatenation = 0;
    while(nums.length >1){
        let pick = [nums.shift(), nums.pop()];
        concatenation += Number(pick.join(''));
    }
    return nums.length < 1 ? concatenation : concatenation+Number(nums[0]);
};