/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function(blocks, k) {
    let min = Number.MAX_VALUE;
    let cnt = 0;
    for(let i=0; i<=blocks.length-k; i++){
        cnt = 0;
        let char = blocks.substr(i, k);
        for(const x of char){
            if(x === 'W') cnt++;
        }
        min = Math.min(min, cnt);
    }
    return min;
};