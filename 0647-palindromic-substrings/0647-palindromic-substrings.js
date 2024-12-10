/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let cnt = 0;
    for(let i=0; i<(2*s.length-1); i++){
        let left = Math.floor(i/2);
        let right = left + i%2;
        while(left >= 0 && right < s.length && s[left] === s[right]){
            cnt++;
            left--;
            right++;
        }
    }
    return cnt; 
};