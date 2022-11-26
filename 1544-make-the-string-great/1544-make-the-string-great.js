/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    let answer = '';
    for(let i=0; i<s.length; i++) {
        if(!answer) {
            answer = s[i]; 
            continue;
        }
        let letter = answer[answer.length-1];
        if(letter === letter.toUpperCase()) {
            if (s[i] === letter.toLowerCase()) answer = answer.slice(0, answer.length - 1);
            else answer += s[i];
        } else {
            if (s[i] === letter.toUpperCase()) answer = answer.slice(0, answer.length - 1);
            else answer += s[i];
        }
    }
    return answer;
};