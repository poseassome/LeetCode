/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getHappyString = function(n, k) {
    let str = [];
    const DFS = (cnt, prev, s) => {
        if(cnt >= n){
            str.push(s);
            return;
        }
        for(let x of ['a', 'b', 'c']){
            if(prev === x) continue;
            DFS(cnt+1, x, s+x);
        }
    }
    DFS(0, '', '');
    if(k <= str.length) return str[k-1];
    return '';
};