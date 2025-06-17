/**
 * @param {string} caption
 * @return {string}
 */
var generateTag = function(caption) {
    const words = caption.match(/[a-zA-Z]+/g) || [];
    const camel = words.map((w, i) => !i 
            ? w.toLowerCase() 
            : w[0].toUpperCase() + w.slice(1).toLowerCase()
    ).join('');
    return ('#' + camel).slice(0, 100);
};