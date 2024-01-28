/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function(s) {
    const vowels = new Set(["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"]);
    let arr = [], res = "";
    for(let i=0; i<s.length; i++){
        if(vowels.has(s[i])) arr.push(s[i]);
    }
    arr.sort();
    let idx = 0;
    for(const x of s){
        res += vowels.has(x) ? arr[idx++] : x;
    }
    return res;
};