/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function(n) {
    n = n.toString(2);
    let distance = 0;
    let j = 0;
    for(let i=1; i<n.length; i++){
        if(n[i] === '1' && n[j] === '1'){
            distance = i-j > distance ? i-j : distance;
            j=i;
        }
    }
    return distance;
};