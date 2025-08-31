/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPrimeFrequency = function(nums) {
    let map = {};
    for(let x of nums){
        if(!map[x]) map[x] = 1;
        else map[x]++;
    }
    const isPrime = x => {
        if(x <= 1) return false;
        for(let i=2; i<x; i++){
            if(x%i === 0) return false;
        }
        return true;
    }
    for(const x in map){
        if(isPrime(map[x]) === true) return true;
    }
    return false;
};