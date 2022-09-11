/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    let arr = [];
    for(let i=0; i<nums.length; i++){
        let freq = nums[2*i];
        let val = nums[2*i+1];
        while (freq-- > 0){
            arr.push(val);
        }
    }
    return arr;
};