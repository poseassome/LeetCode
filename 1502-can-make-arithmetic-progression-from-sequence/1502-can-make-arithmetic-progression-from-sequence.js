/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
    arr.sort((a,b) => b-a);
    let diff = arr[0]-arr[1];
    for(let i=0; i<arr.length-1; i++){
        if(arr[i]-arr[i+1] !== diff) return false;
    }
    return true;
};