/**
 * @param {number[]} nums
 * @return {boolean[]}
 */
var prefixesDivBy5 = function(nums) {
    let num = 0;
    let arr = [];
    for(const x of nums){
        num = (num*2+x)%5;
        arr.push(!num);
    }
    return arr;
};