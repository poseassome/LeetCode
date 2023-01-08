/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
    let answer = "";
    for(let i=2; i<num.length; i++){
        if(num[i] === num[i-1] && num[i] === num[i-2]){
            const substring = num[i].repeat(3);
            if(substring > answer) answer = substring;
        }
    }
    return answer;
};