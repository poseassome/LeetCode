/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function(nums, queries) {
    let answer = [];
    nums.sort((a,b) => a-b);
    for(const x of queries){
        let cnt = 0;
        let sum = 0;
        for(const y of nums){
            if(sum+y <= x){
                sum += y;
                cnt++;
            } else break;
        }
        answer.push(cnt);
    }
    return answer;
};