/**
 * @param {number} n
 * @return {number}
 */
var getMaximumGenerated = function(n) {
    if(n === 0) return 0;
    let arr = [0, 1];
    for(let i=2; i<=n; i++){
        if(i%2 === 0) arr.push(arr[i/2]);
        else arr.push(arr[(i-1)/2]+arr[(i+1)/2]);
    }
    return Math.max(...arr);
};