/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var complexNumberMultiply = function(num1, num2) {
    const convert = num => {
        return num.substr(0, num.length-1).split('+').map(el => parseInt(el));
    }
    
    const [a1, a2] = convert(num1);
    const [b1, b2] = convert(num2);
    return `${a1*b1 - a2*b2}+${a1*b2 + b1*a2}i`;
};