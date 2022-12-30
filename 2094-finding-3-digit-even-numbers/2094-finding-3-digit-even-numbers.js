/**
 * @param {number[]} digits
 * @return {number[]}
 */
var findEvenNumbers = function(digits) {
    let arr = [];
    for(let i=0; i<digits.length; i++){
        if(digits[i]%2 === 0){
            for(let j=0; j<digits.length; j++){
                if(i !== j && digits[j] !== 0){
                    for(let k=0; k<digits.length; k++){
                        if(k !== i & k!== j) arr.push(digits[j]*100+digits[k]*10+digits[i]);
                    }
                }
            }
        }
    }
    return [...new Set(arr)].sort();
};