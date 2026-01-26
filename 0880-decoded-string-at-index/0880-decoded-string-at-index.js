/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var decodeAtIndex = function(s, k) {
    let cnt = 0;
    for(let i=0; i<s.length; i++){
        if(!isNaN(s[i])) cnt *= Number(s[i]);
        else cnt++;
    }

    for(let i=s.length-1; i>=0; i--){
        k = k%cnt;
        if(k === 0 && isNaN(s[i])) return s[i];
        if(!isNaN(s[i])) cnt = Math.ceil(cnt / Number(s[i]));
        else cnt--;
    }
};