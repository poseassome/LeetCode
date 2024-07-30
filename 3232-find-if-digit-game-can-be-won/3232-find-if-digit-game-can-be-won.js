/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canAliceWin = function(nums) {
    let single = 0, double = 0;
    for(const x of nums){
        if(x < 10) single += x;
        else double += x;
    }
    if(single === double) return false;
    return true;
};