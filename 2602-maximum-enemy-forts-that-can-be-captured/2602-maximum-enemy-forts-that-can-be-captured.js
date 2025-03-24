/**
 * @param {number[]} forts
 * @return {number}
 */
var captureForts = function(forts) {
    let i=0, j=1, max = 0;
    while(j<forts.length){
        if(forts[j]){
            if(forts[i] && forts[j] !== forts[i]) max = Math.max(max, j-i-1);
            i = j;
        }
        j++;
    }
    return max;
};