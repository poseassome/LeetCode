/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
var nthSuperUglyNumber = function(n, primes) {
    let arr = new Array(n);
    let primesIdx = new Array(primes.length).fill(0);
    arr[0] = 1;
    for(let i=1; i<n; i++){
        let min = Number.MAX_VALUE;
        for(let j=0; j<primes.length; j++){
            min = Math.min(min, primes[j] * arr[primesIdx[j]]);
        }
        arr[i] = min;
        for(let j=0; j<primes.length; j++){
            if(min == primes[j] * arr[primesIdx[j]]) primesIdx[j]++;
        }
    }
    return arr[n-1];
};