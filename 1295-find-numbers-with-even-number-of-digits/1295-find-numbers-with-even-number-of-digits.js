/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let answer = 0;
    for(let x of nums){
        if(x.toString().length%2 === 0) answer++;
    }
    return answer;
};