/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var hasMatch = function(s, p) {
    const [a, b] = p.split("*");
    const [i, j] = [s.indexOf(a), s.lastIndexOf(b)];
    return i >= 0 && j >= i+a.length;
};