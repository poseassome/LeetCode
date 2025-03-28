/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minBitwiseArray = function(nums) {
    const res = [];
    for(let i=0; i<nums.length; i++){
        const num = nums[i];
        let found = false;
        for(let j=0; j<num; j++){
            if((j | (j+1)) === num){
                res.push(j);
                found = true;
                break;
            }
        }
        if(!found) res.push(-1);
    }
    return res;
};