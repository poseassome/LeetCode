/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var minimumOperationsToMakeKPeriodic = function(word, k) {
    let map = new Map();
    let left = 0, right = k;
    while(left<right && right<=word.length){
        const substr = word.substring(left, right);
        map.set(substr, (map.get(substr) || 0)+1);
        left += k;
        right += k;
    }
    return (word.length/k)-Math.max(...map.values());
};