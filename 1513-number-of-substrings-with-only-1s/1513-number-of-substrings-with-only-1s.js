/**
 * @param {string} s
 * @return {number}
 */
var numSub = function(s) {
    let cnt = 0 
    let res = 0 
    let mod = 1e9 + 7
    for(let i=0 ; i<s.length ; i++){
        if(s[i] === '1'){
            cnt++;
            res = (res+cnt)%mod;
        } else cnt = 0;
    }
    return res;
};