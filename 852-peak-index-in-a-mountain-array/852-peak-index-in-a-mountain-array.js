/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    if(arr.length >= 3) {
        const idx = Math.max(...arr);
        return arr.indexOf(idx);
    }
};