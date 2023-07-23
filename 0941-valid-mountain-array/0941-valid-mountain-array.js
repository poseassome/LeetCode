/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    let top;
    if(arr.length < 3) return false;
    for(let i=0 ;i<arr.length; i++){
        if(arr[i] === arr[i+1]) return false;
        if(top && arr[i] >= top) return false;
        if(top && arr[i] <= arr[i+1]) return false;
        if(!top && arr[i] > arr[i+1]) top = arr[i];
    }
    return top !== undefined && top !== arr[0];
};