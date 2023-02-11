/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let dep = 0, cnt = 0;
    for(let i=0; i<s.length; i++){
        if(s[i] === '('){
            cnt++;
            dep = Math.max(dep, cnt);
        }
        if(s[i] === ')') cnt--;
    }
    return dep;
};