/**
 * @param {number} n
 * @return {number}
 */
var maxProduct = function(n) {
    let arr = n.toString().split('').sort((a, b) => a-b);
    return parseInt(arr[arr.length-1])*parseInt(arr[arr.length-2])
};