/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function(n) {
    let max = 0;
    for(let i=0; i<n.length; i++){
        max = Math.max(max, n.charAt(i)-'0');
    }
    return max;
};