/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    s = s.split(" ");
    let answer = new Array(s.length);
    for(let x of s){
        let i = x.length-1;
        answer[x[i]-'1'] = x.substring(0, i); 
    }
    return answer.join(" ");
};

