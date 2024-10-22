/**
 * @param {number[]} nums
 * @return {number}
 */
var countCompleteSubarrays = function(nums) {
    let len = nums.length, dis = new Set(nums).size, res = 0;
    for(let i=0; i<len; i++){
        let set = new Set();
        for(let j=i; j<len; j++){
            set.add(nums[j]);
            if(set.size === dis) res++;
        }
    }
    return res;
    
};