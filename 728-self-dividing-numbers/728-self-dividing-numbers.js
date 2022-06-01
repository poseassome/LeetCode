/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    let answer = [];
    for(let i=left; i<=right; i++){
        let cnt = 0;
        let num = i.toString().split('');
        for(let j=0;j<num.length; j++){
            if(i%Number(num[j])===0) cnt++;
        }
        if(cnt === num.length) answer.push(i);
    }
    return answer;
};