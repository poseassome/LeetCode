/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function(s) {
    let cnt = 0;
    let answer = '';
    for(let i=0; i<s.length; i++){
        if(s[i] === s[i-1]){
            cnt++;
            if(cnt <= 2) answer += s[i];
        } else {
            answer += s[i];
            cnt = 1;
        }
    }
    return answer;
};