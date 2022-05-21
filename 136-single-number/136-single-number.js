/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let arr = [];
    for(let x of nums){
        if(arr.includes(x)) arr.splice(arr.indexOf(x), 1);
        else arr.push(x);
    }
    return arr[0];
};