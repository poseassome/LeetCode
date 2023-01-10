/**
 * @param {string} s
 * @return {string}
 */
var reformat = function(s) {
    const letter = [];
    const num = [];
    for(let x of s){
        if(isNaN(x)) letter.push(x);
        else num.push(x);
    }
    if(Math.abs(letter.length-num.length) >= 2) return '';
    let str = '';
    if(letter.length > num.length){
        for(let i=0; i<letter.length; i++) str += letter[i]+num[i];
    } else {
        for(let i=0; i<num.length; i++) str += num[i]+letter[i];
    }
    return str.replace(undefined, '');
};