/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function(houses, heaters) {
    houses.sort((a,b) => a-b);
    heaters.sort((a,b) => a-b);
    let i=0; res = 0;
    for(const house of houses){
        while(i<heaters.length-1 && heaters[i]+heaters[i+1]<=house*2) i++;
        res = Math.max(res, Math.abs(heaters[i] - house));
    }
    return res;
};