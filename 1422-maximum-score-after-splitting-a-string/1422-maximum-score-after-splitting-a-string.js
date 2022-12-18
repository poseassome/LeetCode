/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    let max = 0;
    for(let i=1; i<s.length; i++){
        const left = s.slice(0, i).split('0').length-1;
        const right = s.slice(i).split('1').length-1;
        const sum = left + right;
        max = Math.max(max, sum);
    }
    return max;
};