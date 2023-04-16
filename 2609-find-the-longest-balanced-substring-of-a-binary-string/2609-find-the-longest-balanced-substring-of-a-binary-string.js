/**
 * @param {string} s
 * @return {number}
 */
var findTheLongestBalancedSubstring = function(s) {
    let len = 0;
    for(let i=0; i<s.length; i++){
        let one = 0;
        let zero = 0;
        let j = i;
        for(; j<s.length; j++){
            if(s[j] === '0') zero++;
            if(s[j] === '1') break;
        }
        for(let k=j; k<s.length; k++){
            if(s[k] === '0') break;
            if(s[k] === '1') one++;
            if(zero === one) len = Math.max(len, (k-i+1));
        }
    }
    return len;
};