/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let res = [];
    const helper = (s, l, r) => {
        if(l === 0 && r === 0) res.push(s);
        if(l > 0) helper(s + "(", l-1, r);
        if(r > l) helper(s + ")", l, r-1);
        return res;
    }
    return helper("", n, n);
};