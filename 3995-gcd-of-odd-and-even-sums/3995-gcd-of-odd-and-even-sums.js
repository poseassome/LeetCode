/**
 * @param {number} n
 * @return {number}
 */
var gcdOfOddEvenSums = function(n) {
    const gcd = (a,b) => (b ? gcd(b, a%b) : a);
    let EvenSum = 0, OddSum = 0;
    for(let i=0; n--; i+=2){
        EvenSum += i;
        OddSum += i+1;
    }
    return gcd(EvenSum, OddSum);
};