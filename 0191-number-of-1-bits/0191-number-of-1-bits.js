/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let answer = 0;
    while (n){
        if(n%2) answer++;
        n = Math.floor(n/2);
    }
    return answer;
};