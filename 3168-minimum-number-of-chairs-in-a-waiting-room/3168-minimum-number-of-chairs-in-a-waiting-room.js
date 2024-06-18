/**
 * @param {string} s
 * @return {number}
 */
var minimumChairs = function(s) {
    let cnt = 0; max = 0;
    for(const x of s){
        if(x === 'E') cnt++;
        else cnt--;
        max = Math.max(max, cnt);
    }
    return max;
};