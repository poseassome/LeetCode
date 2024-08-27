/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a,b) => a[1] - b[1]);
    let arr, cnt = 0;
    intervals.forEach(el => {
        if(!arr) arr = el;
        else {
            if(arr[1] > el[0]) cnt++;
            else arr = el;
        }
    })
    return cnt;
};