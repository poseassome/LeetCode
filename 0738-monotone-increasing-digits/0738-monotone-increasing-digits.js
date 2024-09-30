/**
 * @param {number} n
 * @return {number}
 */
var monotoneIncreasingDigits = function(n) {
    const arr = n.toString().split('');
    const len = arr.length;
    let position = len;
    for(let i=len-1; i>0; i--){
        if(arr[i-1] > arr[i]){
            arr[i-1]--;
            position = i;
        }
    }
    for(let i=position; i<len; i++){
        arr[i] = 9;
    }
    return Number(arr.join(''));
};