/**
 * @param {number} n
 * @return {string[]}
 */
var simplifiedFractions = function(n) {
    const gcd = (a, b) => {
        return !b ? a : gcd(b, a%b);
    }
    let res = [];
    for(let i= 1; i<n; i++){
        for(let j=i+1; j<=n; j++){
            if(gcd(i, j) === 1) res.push(`${i}/${j}`);
        }
    } 
    return res;
};