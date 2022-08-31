/**
 * @param {string} s
 * @return {string}
 */
var sortString = function(s) {
    let arr = Array.from(s);
    let answer = '';
    arr.sort();

    while(arr.length) {
        arr = arr.filter((el, idx) => {
            if(idx === 0 || el !== answer[answer.length-1]) {
                answer += el;
                return false;
            }
            return true;
        });
        arr.reverse();
    }
    return answer;
};