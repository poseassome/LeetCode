/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let answer = [];
    for(let i=0; i<nums.length; i++){
        let cnt = 0;
        for(let x of nums){
            if(nums[i]>x) cnt++;
        }
        answer.push(cnt);
    }
    return answer;
};