/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
    let diff = Infinity;
    let arr = timePoints.map(el => Number(el.slice(0, 2))*60 + Number(el.slice(3, 5)))
                        .sort((a,b) => a-b);
    for(let i=1; i<arr.length; i++){
        diff = Math.min(diff, Math.abs(arr[i] - arr[i-1]));
    }
    return Math.min(diff, 1440+arr[0]-arr[arr.length-1]);
};