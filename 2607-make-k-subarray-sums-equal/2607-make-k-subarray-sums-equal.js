/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var makeSubKSumEqual = function(arr, k) {
    let res = 0, len = arr.length;
    for(let i=0; i<len; i++){
        let j = i;
        const temp = [];
        while(arr[j] !== 0){
            temp.push(arr[j]);
            arr[j] = 0;
            j = (j+k)%len;
        }
        temp.sort((a,b) => a-b);
        const mid = temp[Math.floor(temp.length/2)];
        for(const x of temp){
            res += Math.abs(x - mid);
        }
    }
    return res;
};