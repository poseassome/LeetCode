/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    let cnt = 1;
    while(num > 1){
        if(num%2!==0) num = num-1;
        else num = num/2;
        cnt++
    }
    return num === 0 ? num : cnt;
};