/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    let word = '', map = {};
    let words = paragraph.toLowerCase().split(/[ !?',;.]/);
    words.forEach(el => {
        if(el && !banned.includes(el)) {
            map[el] = (map[el] || 0)+1;
            if(!word || map[el]>map[word]) word = el;
        }
    });
    return word;
};