/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    return arr.filter(el => arr.includes(el*2));
};