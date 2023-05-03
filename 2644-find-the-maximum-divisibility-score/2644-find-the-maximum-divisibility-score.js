/**
 * @param {number[]} nums
 * @param {number[]} divisors
 * @return {number}
 */
var maxDivScore = function(nums, divisors) {
    let max = 0;
    let minimum = divisors[0];
    for(const x of divisors){
        let score = 0;
        for(const n of nums){
            if(n%x === 0) score++;
        }
        if(score === max) minimum = Math.min(minimum, x);
        if(score > max){
            max = score;
            minimum = x;
        }
    }
    return minimum;
};