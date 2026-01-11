/**
 * @param {number[]} values
 * @return {number}
 */
var maxScoreSightseeingPair = function(values) {
    let max = 0;
    let maxPrev = values[0];
    
    for(let i=1; i<values.length; i++){
        max = Math.max(max, maxPrev+values[i]-i);
        maxPrev = Math.max(maxPrev, values[i]+i);
    }
    return max;
};