/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    return parseInt((((num >>> 0).toString(2)).replace(/0/g, 'x').replace(/1/g, '0')).replace(/x/g, '1'), 2);
};