/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function(arr) {
    let chunk = 0, max = 0;
    for(let i=0; i<arr.length; i++){
        max = Math.max(max, arr[i]);
        if(i>=max) chunk++;
    }
    return chunk;
};