/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let answer = '';
    s = s.split(' ');
    for(let i=0; i<s.length; i++){
        s[i] = s[i].split('');
        while(s[i].length){
            answer += s[i].pop();
        }
        if(i !== s.length-1) answer += ' ';
    }
    return answer;
};