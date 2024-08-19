/**
 * @param {number} n
 * @return {number}
 */
var integerReplacement = function(n) {
    let cnt = 0;
    while(n>1){
        if(n === 3) return cnt+2;
        if(n%2 === 0) n /= 2;
        else if(((n+1)/2)%2 === 0) n++;
        else n--;
        cnt++;
    }
    return cnt;
};