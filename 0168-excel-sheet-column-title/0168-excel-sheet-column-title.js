/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    let arr = [];
    while(columnNumber>0){
        arr.unshift((columnNumber-1)%26);
        columnNumber = Math.trunc((columnNumber-1)/26);
    }
    return String.fromCharCode(...arr.map(el => el+65));
};