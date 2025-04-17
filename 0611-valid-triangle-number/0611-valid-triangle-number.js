/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function(nums) {
    if(!nums.length || nums.length < 3) return 0;
    nums.sort((a,b) => a-b);
    let cnt = 0;
    for(let i=nums.length-1; i>=2; i--){
        let start = 0, end = i-1;
        while(start-end){
            if(nums[start] + nums[end] > nums[i]){
                cnt += (end-start);
                end--;
            } else start++;
        }
    }
    return cnt;
};