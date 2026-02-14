/**
 * @param {number} n
 * @return {number}
 */
var rotatedDigits = function(n) {
    let cnt = 0;
    let ignoreSet = new Set([3,4,7]);
    let acceptable = new Set([2,5,6,9]);
    for(let i=2; i<=n; i++){
        let value = i;    
        let flag = false;
        while(value !== 0){
            let digit = value%10;
            if(ignoreSet.has(digit)){                
                flag = false;
                break;
            } else if(acceptable.has(digit)) flag = true;
            value = Math.floor(value/10);
        }
        if(flag) cnt++;
    }
    return cnt;
};