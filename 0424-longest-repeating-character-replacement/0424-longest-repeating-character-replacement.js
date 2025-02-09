/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let map = new Map(), left = 0, max = 0;
    for(let i=0; i<s.length; i++){
        map.set(s[i], (map.get(s[i]) || 0)+ 1);
        if(i-left+1 - Math.max(...map.values()) <= k) max = Math.max(max, i-left+1);
        else {
            map.set(s[left], map.get(s[left])- 1);
            left++;
        }
    }
    return max;
};