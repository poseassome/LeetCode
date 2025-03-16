/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    let left = 0, right = Math.floor(Math.sqrt(c));
    while(left <= right){
        const sum = left*left + right*right;
        if(sum === c) return true;
        else if(sum < c) left++;
        else right--;
    }
    return false;
};