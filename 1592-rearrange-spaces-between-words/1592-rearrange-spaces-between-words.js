/**
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function(text) {  
    let spaceCnt = 0;
    let word = text.split(' ').filter(el => el !== '');
    for(const x of text){
        if(x === ' ') spaceCnt++;
    }
    let between = Math.floor(spaceCnt / (word.length-1));
    let extra = spaceCnt - (between*(word.length-1));
    if(word.length>1) return word.join(' '.repeat(between)) + ' '.repeat(extra);
    return word.join('') + ' '.repeat(spaceCnt);
};


    