/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    let Max = -1;
    for(let i=arr.length-1; i>=0 ; i--){
        let temp = arr[i];
        arr[i] = Max;
        Max = Math.max(Max, temp);
    }
    return arr;
};