/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    let answer = 0;
    for (let i=0; i<columnTitle.length; i++) {
        answer *= 26;
        answer += ((columnTitle.charCodeAt(i) - 'A'.charCodeAt(0)) + 1);    
    }
    return answer;
};