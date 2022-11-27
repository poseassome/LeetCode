/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
    let power = 1;
    let cnt = 1;
    for(let i=1; i<s.length; i++){
        if(s[i] === s[i-1]) cnt++;
        else cnt = 1;
        power = Math.max(power, cnt);
    }
    return power;
};