/**
 * @param {number[]} arr
 * @param {number} m
 * @param {number} k
 * @return {boolean}
 */
var containsPattern = function(arr, m, k) {
    let cnt = 0
    for(let i=0; i+m<arr.length; i++){
        const j = i+m;
        if(arr[i] !== arr[j]) cnt = 0;
        else {
            cnt++;
            if(cnt === (k-1)*m) return true;
        }
    }
    return false;
};