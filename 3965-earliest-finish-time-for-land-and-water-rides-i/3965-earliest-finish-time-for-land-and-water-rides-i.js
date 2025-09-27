/**
 * @param {number[]} landStartTime
 * @param {number[]} landDuration
 * @param {number[]} waterStartTime
 * @param {number[]} waterDuration
 * @return {number}
 */
var earliestFinishTime = function(landStartTime, landDuration, waterStartTime, waterDuration) {
    const n = landStartTime.length;
    const m = waterStartTime.length;
    let min = Infinity;
    for(let i=0; i<n; i++){
        for(let j=0; j<m; j++){
            const land_cost = landStartTime[i] + landDuration[i];
            const water_cost = waterStartTime[j] + waterDuration[j];
            const case1 = land_cost + Math.max(0, waterStartTime[j]-land_cost) + waterDuration[j];
            const case2 = water_cost + Math.max(0, landStartTime[i]-water_cost) + landDuration[i];
            min = Math.min(min, case1, case2);
        }
    }
    return min;
};