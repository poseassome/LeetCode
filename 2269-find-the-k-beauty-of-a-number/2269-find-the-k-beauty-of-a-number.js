/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var divisorSubstrings = function(num, k) {
    let cnt = 0;
    for(let i=0; i<=String(num).split('').length-k; i++){
        const int = +String(num).slice(i, k+i);
        if(num%int === 0) cnt++;
    }
    return cnt;
};