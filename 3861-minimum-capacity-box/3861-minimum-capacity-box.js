/**
 * @param {number[]} capacity
 * @param {number} itemSize
 * @return {number}
 */
var minimumIndex = function(capacity, itemSize) {
    let res = capacity.indexOf(Math.min(...capacity.filter(x => x >= itemSize)));
    return res !== undefined ? res : -1;
};