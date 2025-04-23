/**
 * @param {number} n
 * @return {number}
 */
var numPrimeArrangements = function(n) {
    const mod = 10 ** 9 + 7;
    let primes = 0, nonPrimes = 0;
    let res = 1;

    const isPrime = n => {
        if(n <= 1) return false;
        if(n <= 3) return true;
        let i=2;
        while(i <= Math.sqrt(n)){
            if(n%i === 0) return false;
            i++;
        }
        return true;
    }

    for(let i=1; i<=n; i++){
        if(isPrime(i)) res *= ++primes;
        else res *= ++nonPrimes;
        res = res % mod;
    }
    return res;
};