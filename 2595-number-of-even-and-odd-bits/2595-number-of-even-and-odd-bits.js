/**
 * @param {number} n
 * @return {number[]}
 */
var evenOddBit = function(n) {
    let even = 0, odd = 0;
    n = n.toString(2).split('').reverse().map(el => Number(el));
    for(let i=0; i<n.length; i++){
        if(n[i] === 1){
            if(i%2 === 1) odd++;
            else even++
        }
    }
    return [even, odd];
};