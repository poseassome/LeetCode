/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function(encoded, first) {
    let arr = [first];
    encoded.forEach((el, idx) => {
        arr.push(arr[idx]^el);
    })
    return arr;
};