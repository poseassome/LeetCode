/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
    if (numerator === 0) return "0";
    let res = [];
    if((numerator < 0)^(denominator < 0)) res.push("-");
    let num = Math.abs(numerator);
    let den = Math.abs(denominator);
    res.push(Math.floor(num / den));
    let remainder = num%den;
    if(remainder === 0) return res.join("");
    res.push(".");
    let remPos = {}; 
    while(remainder !== 0){
        if(remPos[remainder] !== undefined) {
            res.splice(remPos[remainder], 0, "(");
            res.push(")");
            break;
        }
        remPos[remainder] = res.length;
        remainder *= 10;
        res.push(Math.floor(remainder/den));
        remainder %= den;
    }
    return res.join("");
};