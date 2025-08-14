/**
 * @param {number[]} nums
 * @return {number}
 */
var totalHammingDistance = function(nums) {
    let len = nums.length, res = 0;
    for(let i=0; i<32; i++){
        let cnt = 0;
        for(let j=0; j<len; j++){
            if(nums[j] & (1 << i)) cnt++;
        }   
        res += (len-cnt) * cnt;
    }
    return res;
};