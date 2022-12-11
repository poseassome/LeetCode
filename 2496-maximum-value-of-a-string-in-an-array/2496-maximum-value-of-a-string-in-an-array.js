/**
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function(strs) {
    let max = 0;
    for(const s of strs){
        let val = 0;
        if(isNaN(Number(s))) val = s.length;
        else val = s;
        max = Math.max(max, val);
    }
    return max;
};