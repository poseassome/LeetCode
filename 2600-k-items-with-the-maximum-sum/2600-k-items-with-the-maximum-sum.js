/**
 * @param {number} numOnes
 * @param {number} numZeros
 * @param {number} numNegOnes
 * @param {number} k
 * @return {number}
 */
var kItemsWithMaximumSum = function(numOnes, numZeros, numNegOnes, k) {
    const arr = Array(numOnes).fill(1).concat(Array(numZeros).fill(0)).concat(Array(numNegOnes).fill(-1)).sort((a,b) => b-a);
    let sum = 0, i = 0;
    while(k--){
        sum += arr[i++];
    };
    return sum;
};