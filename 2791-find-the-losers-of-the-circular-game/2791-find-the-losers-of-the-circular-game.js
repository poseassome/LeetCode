/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var circularGameLosers = function(n, k) {
    const set = new Set();
    let currunt = 0, cnt = 1;
    while(!set.has(currunt)){
        set.add(currunt);
        currunt = (currunt + k*cnt) % n;
        cnt++;
    }
    const res = [];
    for(let i=1; i<=n; i++){
        if(!set.has(i-1)) res.push(i);
    }
    return res;
};