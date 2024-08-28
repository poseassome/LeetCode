/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var kthSmallestPrimeFraction = function(arr, k) {
    let fraction = [];
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            fraction.push({keys: [arr[i], arr[j]], value: arr[i]/arr[j]});
        }
    }
    fraction.sort((a,b) => a.value-b.value);
    return fraction[k-1].keys;
};