/**
 * @param {number[][]} nums
 * @return {number}
 */
var numberOfPoints = function(nums) {
    let obj = {};
    for(const [start, end] of nums){
        for(let i=start; i<=end; i++){
            obj[i] = 1;
        }
    }
    return Object.keys(obj).length;
};