/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function(date) {
    let a = new Date(date);
    let b = new Date(date.slice(0, 4));

    return (a - b) / (1000 * 60 * 60 * 24) + 1;
};