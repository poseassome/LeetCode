/**
 * @param {number} num
 * @return {number}
 */
var countEven = function(num) {
    let cnt = 0;
    for(let i=1; i<=num; i++){
        let sum = i.toString().split('').reduce((acc, cur) => +acc + +cur);
        if(sum%2 === 0) cnt++;
    }
    return cnt;
};