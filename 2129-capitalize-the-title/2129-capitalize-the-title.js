/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {
    title = title.split(' ').map(letter => {
        if(letter.length <= 2) return letter.toLowerCase();
        else return letter[0].toUpperCase() + letter.substring(1).toLowerCase();
    })
    return title.join(' ');
};