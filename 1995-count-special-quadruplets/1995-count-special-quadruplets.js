/**
 * @param {number[]} nums
 * @return {number}
 */
var countQuadruplets = function(nums) {
    let cnt = 0;
    for(let i=0; i<nums.length-3; i++){
        for(let j=i+1; j<nums.length-2; j++){
            for(let k=j+1; k<nums.length-1; k++){
                const sum = nums[i]+nums[j]+nums[k];
                const find = nums.slice(k+1).filter(el => el === sum);
                cnt += find.length;
            }
        }
    }
    return cnt;
};