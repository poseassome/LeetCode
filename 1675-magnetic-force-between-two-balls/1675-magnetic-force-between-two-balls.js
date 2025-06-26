/**
 * @param {number[]} position
 * @param {number} m
 * @return {number}
 */
var maxDistance = function(position, m) {
    const len = position.length;
    position.sort((a,b) => a-b);
    let low = 1, high = position[len-1] - position[0];

    const isPossible = (distance) => {
        let last = position[0], noBalls = 1;
        for(let i=1; i<len; i++){
            if((position[i] - last) >= distance){
                noBalls++;
                last = position[i];
            }
        }
        return noBalls >= m;
    }
    
    while(low <= high){
        const mid = low + Math.floor((high-low)/2);
        if(isPossible(mid)) low = mid+1;
        else high = mid-1;
    }
    return high;
};