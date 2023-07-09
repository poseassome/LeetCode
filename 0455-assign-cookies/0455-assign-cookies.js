/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g.sort((a,b) => a-b);
    s.sort((a,b) => a-b);
    let cnt = 0;
    while(g.length){
        if(s[s.length-1] >= g[g.length-1]){
            g.pop();
            s.pop();
            cnt++;
        } else g.pop();
    }
    return cnt;
};