/**
 * @param {number} ax1
 * @param {number} ay1
 * @param {number} ax2
 * @param {number} ay2
 * @param {number} bx1
 * @param {number} by1
 * @param {number} bx2
 * @param {number} by2
 * @return {number}
 */
var computeArea = function(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
  const areaA = Math.abs((ax2 - ax1) * (ay2 - ay1));
  const areaB = Math.abs((bx2 - bx1) * (by2 - by1));
  const intersectionX = Math.max(0, Math.min(bx2, ax2) - Math.max(bx1, ax1));
  const intersectionY = Math.max(0, Math.min(by2, ay2) - Math.max(by1, ay1));
  return areaA + areaB - (intersectionX * intersectionY) ;
};