/**
 * @param {number} n
 * @return {number}
 */
var minimumFlips = function(n) {
    const s = n.toString(2);
    let res = 0;
    for(let i=0; i<s.length/2; i++){
        if(s[i] !== s[s.length-i-1]) res += 2;
    }
    return res;
};