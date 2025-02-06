/**
 * @param {string} s
 * @return {number}
 */
var maxDifference = function(s) {
    const freq = Object.values([...s].reduce((acc, cur) => (acc[cur] = (acc[cur] || 0) + 1, acc), {}));
    return Math.max(...freq.filter(el => el%2)) - Math.min(...freq.filter(el => !(el%2)));
};