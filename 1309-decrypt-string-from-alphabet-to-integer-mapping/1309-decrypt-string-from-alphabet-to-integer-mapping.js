/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) {
    const base = 'a'.charCodeAt(0)-1;
    return s.replace(/(\d\d#|\d)/g, s => {
        return s[2] === '#' ? String.fromCharCode(base + parseInt(s.slice(0, -1))) : String.fromCharCode(base + parseInt(s))
    });
};