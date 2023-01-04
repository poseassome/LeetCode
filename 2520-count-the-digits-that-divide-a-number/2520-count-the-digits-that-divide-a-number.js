/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
    let cnt = 0;
    for(let i=0; i<num.toString().length; i++){
        if(num%Number(num.toString()[i]) === 0) cnt++;
    }
    return cnt;
};