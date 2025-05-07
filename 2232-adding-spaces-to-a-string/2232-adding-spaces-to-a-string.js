/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function(s, spaces) {
    let arr = [];
    arr.push(s.slice(0, spaces[0]));
    for(let i=1; i<spaces.length; i++){
        arr.push(s.slice(spaces[i-1], spaces[i]));
    }
    arr.push(s.slice(spaces[spaces.length-1], s.length));
    arr = arr.join(' ');
    return arr;
};