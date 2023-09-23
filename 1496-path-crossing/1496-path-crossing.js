/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function(path) {
    let x = 0, y = 0;
	let map = {};
	for (let i=0; i<=path.length; i++) {
		let cordinates = `x${x}y${y}`;
		if (path[i] === "N") x++;
		else if (path[i] === "S") x--;
		else if (path[i] === "E") y++;
		else y--;
		if (map[cordinates] !== undefined) return true;
		else map[cordinates] = 0;
	}
	return false;
};