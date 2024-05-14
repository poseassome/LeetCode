/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    let arr = [...new Set(nums)];
    let res = [];
    for(const x of arr){
        if(nums.indexOf(x) === nums.lastIndexOf(x)) res.push(x);
    }
    return res;
};