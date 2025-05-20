/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestIndex = function(nums) {
    for(let i=0; i<nums.length; i++){
        const s = String(nums[i]);
        sum = 0;
        for(const x of s){
            sum += +x;
        }
        if(sum === i) return i;
    }
    return -1;
};