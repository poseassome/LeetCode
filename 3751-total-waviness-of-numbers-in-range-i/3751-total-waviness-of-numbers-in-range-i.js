/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var totalWaviness = function(num1, num2) {
    num1 = Math.max(num1, 100);
    let res = 0;
    let prev1, prev2;
    let tmp;
    
    for(let i=num1; i<=num2; i++) {
        prev1 = -1;
        prev2 = -1;
        tmp = i;
        while(tmp){
            if(prev1 !== -1 && prev2 !== -1){
                if(prev1 < prev2 && prev2 > tmp % 10 || prev1 > prev2 && prev2 < tmp % 10) res++;
            }
            prev1 = prev2;
            prev2 = tmp%10;
            tmp = Math.floor(tmp/10);
        }
    }
    return res;
};