/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    let arr = new Array(n);
    arr[0] = 1;
    let num1 = 0, num2 = 0, num3 = 0;
    for(let i=1; i<n; i++){
        let next1 = arr[num1]*2;
        let next2 = arr[num2]*3;
        let next3 = arr[num3]*5;
        arr[i] = Math.min(next1, next2, next3);
        if(arr[i] === next1) num1++;
        if(arr[i] === next2) num2++;
        if(arr[i] === next3) num3++;
    }
    return arr[n-1];
};