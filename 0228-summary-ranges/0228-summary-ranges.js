/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    const arr = [];
    let a = nums[0];
    let b = nums[0];
    
    for(let i=1; i<nums.length; i++){
        if(nums[i]-b > 1){
            if(a === b) arr.push(`${a}`);
            else arr.push(`${a}->${b}`);
            a = nums[i];
        }
        b = nums[i];
    }
    if(b-a === 0) arr.push(`${a}`);
    else if(b-a > 0) arr.push(`${a}->${b}`);
    return arr;
};