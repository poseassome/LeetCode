/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {
    let min = Math.max(...weights);
    let max = weights.reduce((acc, cur) => acc+cur, 0);
    let result = max;
    while(min <= max){
        let mid = Math.floor((min+max)/2);
        let neededDays = 1;
        let currentLoad = 0;
        for(const w of weights){
            if(currentLoad+w > mid){
                neededDays++;
                currentLoad = 0;
            }
            currentLoad += w;
        }
        if(neededDays <= days){
            result = mid;
            max = mid-1;
        } else min = mid+1;
    }

    return result;
};