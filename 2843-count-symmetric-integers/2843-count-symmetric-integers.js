/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countSymmetricIntegers = function(low, high) {
    let cnt = 0;
    for(let i=low; i<=high; i++){
        let temp = String(i);
        if(temp.length%2 === 0){
            let sum1 = 0, sum2 = 0;
            for(let j=0; j<temp.length/2; j++){
                sum1 += +temp[j];
                sum2 += +temp[temp.length-j-1];
            }
            if(sum1 === sum2) cnt++;
        }
    }
    return cnt;
};