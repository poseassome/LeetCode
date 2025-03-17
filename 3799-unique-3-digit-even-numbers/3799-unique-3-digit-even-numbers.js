/**
 * @param {number[]} digits
 * @return {number}
 */
var totalNumbers = function(digits) {
    const set = new Set();
    for(let i=0; i<digits.length; i++){
        for(let j=0; j<digits.length; j++){
            for(let k=0; k<digits.length; k++){
                if(i !== j && i !== k && j !== k && digits[k]%2 === 0){
                    const n = digits[i]*100 + digits[j]*10 + digits[k];
                    if(n >= 100) set.add(n);
                }
            }
        }
    }
    return set.size;
};