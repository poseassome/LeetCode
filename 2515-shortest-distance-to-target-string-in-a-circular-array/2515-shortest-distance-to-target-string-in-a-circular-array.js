/**
 * @param {string[]} words
 * @param {string} target
 * @param {number} startIndex
 * @return {number}
 */
var closetTarget = function(words, target, startIndex) {
    if(!words.includes(target)) return -1;
    let shortest = Number.MAX_SAFE_INTEGER;
    for(let i=0; i<words.length; i++){
        if(words[i] === target){
            const distance = Math.abs(startIndex-i);
            shortest = Math.min(shortest, Math.min(distance, words.length-distance));
        }
    }
    return shortest;
};