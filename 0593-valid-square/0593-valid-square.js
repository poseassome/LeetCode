/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
var validSquare = function(p1, p2, p3, p4) {
    const distance = (a, b) => {
        const [aX, aY] = a, [bX, bY] = b;
        return (aX-bX) ** 2 + (aY-bY) ** 2;
    }
    const set = new Set([distance(p1, p2), distance(p1, p3), distance(p1, p4), distance(p2, p3), distance(p2, p4), distance(p3, p4)]);
    return !set.has(0) && set.size === 2;
};