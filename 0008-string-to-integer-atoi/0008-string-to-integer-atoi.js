/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    s = s.trim();
    if(!s.length) return 0;
    let sign = 1, idx = 0;
    if(s[idx] === '-'){
        sign = -1;
        idx++;
    } else if(s[idx] === '+') idx++;

    let res = 0;
    while(idx < s.length && s[idx] >= '0' && s[idx] <= '9'){
        const digit = s[idx] - '0';
        res = res*10 + digit;
        if(res > Math.pow(2, 31) - 1) return sign === 1 ? Math.pow(2, 31) - 1 : -Math.pow(2, 31);
        idx++;
    }
    return res*sign;
};