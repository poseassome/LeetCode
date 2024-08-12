/**
 * @param {number} n
 * @param {string[]} commands
 * @return {number}
 */
var finalPositionOfSnake = function(n, commands) {
    const com = {"RIGHT": 1, "LEFT": -1, "DOWN": n, "UP": -n};
    return commands.reduce((acc, cur) => acc+com[cur], 0);
};