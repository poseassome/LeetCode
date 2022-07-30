/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    let hash = new Set();
    for(let i of s) {
        if(hash.has(i)) return i;        
        hash.add(i);
    }
};