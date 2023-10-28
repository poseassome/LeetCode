/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var countGoodRectangles = function(rectangles) {
    let min = [];
    rectangles.forEach(el => {
        min.push(Math.min(el[0], el[1]));
    });
    const max = Math.max(...min);
    min.sort();
    return min.length-min.indexOf(max);
};