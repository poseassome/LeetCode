/**
 * @param {number} num
 * @return {number}
 */
var splitNum = function(num) {
    num = num.toString().split('').sort((a,b) => a-b);
    let num1 = '', num2 = '';
    let i = 0;
    if(num.length%2){
        i = 1;
        num2 = num[0];
    }
    for(; i<num.length-1; i+=2){
        num1 += num[i];
        num2 += num[i+1];
    }
    return Number(num1)+Number(num2);
};