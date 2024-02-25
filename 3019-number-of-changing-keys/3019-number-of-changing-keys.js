/**
 * @param {string} s
 * @return {number}
 */
var countKeyChanges = function(s) {
    s = s.toLowerCase().split('');
    let cnt = 0;
    for(let i=0; i<s.length; i++){
        if(s[i] !== s[i+1] && i !== s.length-1) cnt++;
    }
    return cnt;
};