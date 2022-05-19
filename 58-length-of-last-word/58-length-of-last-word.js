/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let answer = '';
    for(let i=s.length-1; i>=0; i--) {
        if(answer.length===0 && s[i]===' ') continue;
        else if (s[i]!==' ') answer += s[i];
        else if(s[i] === ' ') break;
    }
    return answer.length;
};