/**
 * @param {string} s
 * @return {number}
 */
var vowelConsonantScore = function(s) {
    let vow = s.replaceAll(/[^aeiou]/g,'').length;
    let nonVow = 'bcdfghjklmnpqrstvwxyz';
    let char = s.replaceAll(new RegExp(`[^${nonVow}]`, 'g'), '').length;
    return char > 0 ? Math.floor(vow/char) : 0;
};