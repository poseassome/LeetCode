/**
 * @param {number} n
 * @param {number} k
 * @return {character}
 */
var findKthBit = function(n, k) {
    if (n === 1) return '0';
    const res_len = (2**n) - 1;
    const mid = Math.floor(res_len/2) + 1;
    if (k === mid) return '1'
    else if (k < mid) return findKthBit(n-1, k);
    else {
        const res = findKthBit(n-1, res_len-k+1);
        return res === '0' ? '1' : '0';
    }
};