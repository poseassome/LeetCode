/**
 * @param {string} s
 * @return {string[]}
 */
var cellsInRange = function(s) {
    let letters = [s.charCodeAt(0), s.charCodeAt(3)];
    let numbers = [Number(s[1]), Number(s[4])];
    let arr = [];
    
    for (let i=letters[0]; i<=letters[1]; i++) {
        for (let j=numbers[0]; j<=numbers[1]; j++) {
            const cell = String.fromCharCode(i) + j;
            arr.push(cell);
        }
    }
    return arr;
};