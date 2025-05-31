/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
    if(timeSeries.length === 0) return 0;
    let time = 0;
    for(let i=0; i<timeSeries.length-1; i++){
        const gap = timeSeries[i+1] - timeSeries[i];
        time = time + Math.min(gap, duration);
    }
    time = time + duration;
    return time;
};