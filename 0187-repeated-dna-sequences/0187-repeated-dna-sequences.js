/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    let seq = new Set(), set = new Set();
    for(let i=0; i<s.length; i++){
        const end = i+10;
        const letter = s.substring(i, end);
        if(set.has(letter)) seq.add(letter);
        set.add(letter);
    }
    return [...seq];
};