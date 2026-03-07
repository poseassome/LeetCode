/**
 * @param {number} rows
 */
var Spreadsheet = function(rows) {
    this.mp = new Map();
};

/** 
 * @param {string} cell 
 * @param {number} value
 * @return {void}
 */
Spreadsheet.prototype.setCell = function(cell, value) {
    this.mp.set(cell, value);
};

/** 
 * @param {string} cell
 * @return {void}
 */
Spreadsheet.prototype.resetCell = function(cell) {
    this.mp.delete(cell);
};

/** 
 * @param {string} formula
 * @return {number}
 */
Spreadsheet.prototype.getValue = function(formula) {
    const arr = formula.substring(1).split('+');
    let ch1 = arr[0];
    let ch2 = arr[1];

    let res = 0;
    res += Number.isInteger(+ch1) ? +ch1 : (this.mp.get(ch1) || 0);
    res += Number.isInteger(+ch2) ? +ch2 : (this.mp.get(ch2) || 0);
    return res;
};

/** 
 * Your Spreadsheet object will be instantiated and called as such:
 * var obj = new Spreadsheet(rows)
 * obj.setCell(cell,value)
 * obj.resetCell(cell)
 * var param_3 = obj.getValue(formula)
 */