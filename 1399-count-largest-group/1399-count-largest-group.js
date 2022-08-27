/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function(n) {
    let sH = new Map();
    for (let i=1; i<=n; i++) {
        let tmp = i.toString().split("").map(x => Number(x));
        let sum = tmp.reduce((acc, cur) => acc + cur);
        if(sH.has(sum)) sH.get(sum).push(tmp);
        else sH.set(sum, [tmp]);
    }
    let arr = Array.from(sH.values()).map(x => x.length);
    arr.sort((a, b) => b - a);
    if([...new Set(arr)].length === 1) return arr.length;
    for (let i=1; i<arr.length; i++) {
        if (arr[i-1] !== arr[i]) return i;
    }
};