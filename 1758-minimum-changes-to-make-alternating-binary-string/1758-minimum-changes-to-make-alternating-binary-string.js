/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function(s) {
    let cnt1 = 0, cnt2 = 0;
    const binary = ['1', '0'];
    for(let i=0; i<s.length; i++){
        if(s[i] === binary[i%2]) cnt1++;
        else cnt2++;
    }
    return Math.min(cnt1, cnt2);
};