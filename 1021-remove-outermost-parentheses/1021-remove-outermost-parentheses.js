/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let answer = '';
	let cnt = 0;
	for(const x of s){
        if(x === '(') cnt++;
        if(cnt !== 1) answer += x;
        if(x === ')') cnt-- ;
	}
	return answer;
};