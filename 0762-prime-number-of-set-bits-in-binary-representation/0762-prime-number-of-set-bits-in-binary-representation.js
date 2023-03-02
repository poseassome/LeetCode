/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var countPrimeSetBits = function(left, right) {
    const isPrime = num => {
        for(let i=2; i<num; i++){
            if(num%i === 0) return false;
        }
        return num>1;
    }
    
    let cnt = 0;
    for(let i=left; i<=right; i++){
        let bits = 0;
        for(const x of i.toString(2)){
            if(x === '1') bits++;
        }
        if(isPrime(bits)) cnt++;
    }
    return cnt;
};