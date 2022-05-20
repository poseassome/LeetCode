/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    // return (parseInt(a, 2) + parseInt(b, 2)).toString(2);
    
    /* BigInt 
      : Number 원시 값이 안정적으로 나타낼 수 있는 최대치인 2^53-1보다 큰 정수를 표현할 수 있는 내장 객체 */
    let sum = BigInt(`0b${a}`) + BigInt(`0b${b}`);
    return sum.toString(2);
};