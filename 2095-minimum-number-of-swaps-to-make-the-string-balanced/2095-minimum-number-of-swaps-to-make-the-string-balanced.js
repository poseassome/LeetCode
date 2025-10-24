/**
 * @param {string} s
 * @return {number}
 */
var minSwaps = function(s) {
    let unbalanced = 0;
    let maxUnbalanced = 0;
    for(const x of s){
        if(x == '[') unbalanced--;
        else unbalanced++;
        maxUnbalanced = Math.max(maxUnbalanced, unbalanced);
    }
    return Math.ceil(maxUnbalanced / 2);
};