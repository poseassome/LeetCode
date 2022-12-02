/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function(arr) {
    let len = arr.length*0.05;
    let sum = 0;
    arr.sort((a, b) => a-b);
    for(let i=len; i<arr.length-len; i++){
        sum += arr[i];
    }
    return sum/(arr.length-2*len);
};