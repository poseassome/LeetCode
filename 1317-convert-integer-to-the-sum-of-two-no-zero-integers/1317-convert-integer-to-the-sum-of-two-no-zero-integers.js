/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function(n) {
    for(let i=1; i<n; i++){
        const a = i.toString().split('');
        const b = (n-i).toString().split('');
        if(!a.includes('0') && !b.includes('0')) return [i, n-i];
    }  
};