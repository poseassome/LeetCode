/**
 * @param {number[]} nums
 * @return {number}
 */
var tupleSameProduct = function(nums) {
    let hash = {}, cnt = 0;
    for(let i=0; i<nums.length-1; i++){
        for(let j=i+1; j< nums.length; j++){
            if(!hash[nums[i]*nums[j]]) hash[nums[i] * nums[j]] = 1;
            else hash[nums[i] * nums[j]]++;
        }
    }
    for(const key in hash){
        let equation = (hash[key]*(hash[key]-1)) / 2;
        cnt += equation*8;
    }
    return cnt;
};