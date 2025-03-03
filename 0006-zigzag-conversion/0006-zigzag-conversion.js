/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows === 1 || numRows >= s.length) return s;
    let rows = new Array(Math.min(numRows, s.length)).fill('');
    let curRow = 0, down = false;
    for(const x of s){
        rows[curRow] += x;
        if(curRow === 0 || curRow === numRows-1) down = !down;
        curRow += down ? 1 : -1;
    }
    return rows.join('');
};