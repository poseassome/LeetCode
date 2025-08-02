/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let res = '';
    for(let i=0; i<s.length; i++){
        for(let j of [i, i+1]){
            let l = i, r = j;
            while(l >= 0 && r < s.length && s[l] === s[r]){
                l--;
                r++;
            }
            if(r-l-1 > res.length) res = s.slice(l+1, r);
        }
    }
    return res;
};