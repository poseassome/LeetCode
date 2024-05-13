/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function(s) {
    const res = [];
    const possible = (cur, idx) => {
        if(idx === s.length){
            res.push(cur);
            return;
        }
        const str = s[idx];
        if(/[a-zA-Z]/.test(str)){
            possible(cur + str.toLowerCase(), idx+1);
            possible(cur + str.toUpperCase(), idx+1);
        } else possible(cur+str, idx+1);
    }
    possible('', 0);
    return res;
};