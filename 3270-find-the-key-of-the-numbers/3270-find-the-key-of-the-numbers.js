/**
 * @param {number} num1
 * @param {number} num2
 * @param {number} num3
 * @return {number}
 */
var generateKey = function(num1, num2, num3) {
    const pad1 = String(num1).padStart(4, '0');
    const pad2 = String(num2).padStart(4, '0');
    const pad3 = String(num3).padStart(4, '0');
    let key = '';
    for(let i=0; i<4; i++){
        key += Math.min(pad1[i], pad2[i], pad3[i]);
    }
    return parseInt(key);
};