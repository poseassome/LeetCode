/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(s, k) {
    if(s.length < k) return 0;
    const map = new Map();
    for(const x of s){
        map.set(x, (map.get(x) || 0) + 1);
    }
    for(const [char, cnt] of map){
        if(cnt < k){
            const strs = s.split(char);
            let maxLength = 0;
            for(const str of strs){
                maxLength = Math.max(maxLength, longestSubstring(str, k));
            }
            return maxLength;
        }
    }
    return s.length;
};