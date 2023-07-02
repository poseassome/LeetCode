/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    for(let i=0; i<words.length-1; i++){
        for(let j=0; j<words[i].length; j++){
            if(order.indexOf(words[i][j]) < order.indexOf(words[i+1][j])) break;
            else if(order.indexOf(words[i][j]) === order.indexOf(words[i+1][j])) continue;
            else return false;
        }
    }
    return true;
};