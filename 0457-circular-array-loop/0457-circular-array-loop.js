/**
 * @param {number[]} nums
 * @return {boolean}
 */
var circularArrayLoop = function(nums) {
    for(let i=0; i<nums.length; i++){
        let start = i;
        let runner = i;
        let cnt = 0;
        while(start < nums.length && cnt <= nums.length*3){
            if(cnt > 1 && runner === start) return true;
            if((cnt === 1 && runner === start) || nums[start]*nums[runner] < 0) break;
            runner = (((runner+nums[runner])%nums.length) + nums.length) % nums.length;
            cnt++;
        }
    }
    return false;
};