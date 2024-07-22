/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var minChanges = function(n, k) {
    const nB = n.toString(2).split('').reverse();
    const kB = k.toString(2).split('').reverse();
    let cnt = 0;
    for(let i=0; i<Math.max(nB.length, kB.length); i++){
        if(nB[i] !== kB[i]){
            if(nB[i] === '1') cnt++;
            else if(kB[i] === '1') return -1;
        }
    }
    return cnt;
};