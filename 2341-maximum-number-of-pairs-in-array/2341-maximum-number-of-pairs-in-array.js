/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function(nums) {
    let cnt = 0;
    nums.sort((a,b) => a - b);
    for(let i=0; i< nums.length;){
        if(nums[i] === nums[i+1]){
            cnt++;
            nums.splice(i,2);
        }else i++;
    }
    return [cnt, nums.length];
};