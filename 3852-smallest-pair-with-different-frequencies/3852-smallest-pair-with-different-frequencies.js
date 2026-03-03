/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minDistinctFreqPair = function(nums) {
    const freq = nums.reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0) + 1;
        return acc;
    }, {})
    nums.sort((a, b) => a-b);
 
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            if(freq[nums[i]] !== freq[nums[j]]) return [nums[i], nums[j]];
        } 
    }
    return [-1, -1];
};