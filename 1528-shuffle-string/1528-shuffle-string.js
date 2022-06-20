/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let answer = '';
    for (i=0; i<indices.length; i++) {
        for (j=0; j<indices.length; j++) {
            if(indices[j] === i) answer += s[j];
        }
    }
    return answer;
};