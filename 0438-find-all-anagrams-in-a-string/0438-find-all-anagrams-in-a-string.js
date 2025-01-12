/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let map = {}, uniqueChars = 0;
    for(const x of p){
        if(!map[x]){
            uniqueChars++;
            map[x] = 1;
        } else map[x]++;
    }
    let res = [];
    let left = 0, right = 0;
    for(let right=0; right<s.length; right++){
        if(map[s[right]] !== null) map[s[right]]--;
        if(map[s[right]] === 0) uniqueChars--;
        if(uniqueChars === 0) res.push(left);
        if(right-left+1 === p.length){
            if(map[s[left]] !== null) map[s[left]]++;
            if(map[s[left++]] === 1) uniqueChars++;
        }
    }
    return res;
};