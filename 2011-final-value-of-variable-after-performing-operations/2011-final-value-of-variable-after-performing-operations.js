/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let answer = 0;
    for(const x of operations){
        if(x.includes("+")) answer++;
        else answer--;
    }
    return answer;
};