/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
var longestDiverseString = function(a, b, c) {
    let cnt = [[a, 'a'], [b, 'b'], [c, 'c']];
    let res = "";
    while (true) {
        cnt.sort((a, b) => b[0] - a[0]);
        let len = res.length;
        if (cnt[0][0] === 0) break;
        if (len < 2 || res[res.length-1] != cnt[0][1] || res[res.length-2] != cnt[0][1]) {
            res += cnt[0][1];
            cnt[0][0]--;
        } else if(cnt[1][0] > 0){
            res += cnt[1][1];
            cnt[1][0]--;
        } else break;
    }
    return res;
};