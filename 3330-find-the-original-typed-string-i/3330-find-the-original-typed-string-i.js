/**
 * @param {string} word
 * @return {number}
 */
var possibleStringCount = function(word) {
    let set = new Set(), cnt = 0;
    for(let i=0; i<word.length; i++){
        if(!set.has(word[i])) set.add(word[i]);
        else if(set.has(word[i]) && word[i-1] === word[i]) cnt++;
    }
    return ++cnt;
};