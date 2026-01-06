/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reversePrefix = function(s, k) {
    const reverse = s.slice(0, k).split('').reverse().join('');
    const last = s.slice(k, s.length);
    return reverse + last;
};