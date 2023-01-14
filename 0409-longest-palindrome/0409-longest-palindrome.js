/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let set = new Set();
    let len = 0;
    for(const x of s){
        if(set.has(x)){
            len += 2;
            set.delete(x);
        } else set.add(x);
    }
    return len + (set.size > 0 ? 1 : 0);
};