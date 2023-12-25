/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(nums) {
    let arr = [];
    nums.sort((a,b) => b-a);
    while(nums.length){
        const a = nums.pop();
        const b = nums.pop();
        arr.push(b, a);
    }
    return arr;
};