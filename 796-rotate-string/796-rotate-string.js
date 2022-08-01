/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    return (s + s).includes(goal) && s.length === goal.length;
};