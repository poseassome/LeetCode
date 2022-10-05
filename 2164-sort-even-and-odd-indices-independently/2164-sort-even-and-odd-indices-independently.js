/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortEvenOdd = function(nums) {
    const odd = [];
    const even = [];
    const arr = [];
    
    for(let i=0; i<nums.length; i++){
        if(i%2 === 0) even.push(nums[i]);
        else odd.push(nums[i]);
    }
    odd.sort((a, b) => b - a);
    even.sort((a, b) => a - b);
    
    for(let i=0; i<nums.length; i++){
        if(i%2 === 0) arr.push(even.shift());
        else arr.push(odd.shift());
    }
    return arr;
};