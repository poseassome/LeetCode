/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canThreePartsEqualSum = function(arr) {
    const total = arr.reduce((acc, cur) => acc+cur, 0);
    const part = total/3;
    let sum = 0, cnt = 0;
    if(total%3 !== 0) return false;
    for(const x of arr){
        sum += x;
        if(sum === part){
            sum =0;
            cnt++;
        }
    }
    return cnt >= 3;
};