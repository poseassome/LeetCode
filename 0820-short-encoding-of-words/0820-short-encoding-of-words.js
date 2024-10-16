/**
 * @param {string[]} words
 * @return {number}
 */
var minimumLengthEncoding = function(words) {
    let set = new Set(words);
    for(const x of words){
        for(let i=1; i<x.length; i++){
            const str = x.substring(i);
            if(set.has(str)) set.delete(str);
        }
    }
    return [...set].reduce((acc, cur) => acc + cur.length+1, 0);
};