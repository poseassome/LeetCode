/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a,b) => a[0]-b[0]);
    const arr = [intervals[0]];
    for(const x of intervals){
        const last = arr[arr.length-1];
        if(last[1] >= x[0]) last[1] = Math.max(x[1], last[1]);
        else arr.push(x);
    }
    return arr;
};