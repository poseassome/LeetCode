/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let prev = 0, length = 0, map = new Map();
    for(let i=0; i<s.length; i++){
        if(map.get(s[i]) >= prev) prev = map.get(s[i])+1;
        else length = Math.max(length, i-prev+1);
        map.set(s[i], i);
    }
    return length;
};