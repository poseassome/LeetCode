/**
 * @param {string} s
 * @return {string}
 */
var makeSmallestPalindrome = function(s) {
    s = s.split('');
    const halfidx = Math.ceil(s.length/2)-1;
    for(let i=0; i<=halfidx; i++){
        if(s[i] !== s[(s.length-1)-i]){
            if(s[i] > s[(s.length-1)-i]) s[i] = s[(s.length-1)-i];
            else s[(s.length-1)-i] = s[i];
        }
    }
    return s.join('');
};