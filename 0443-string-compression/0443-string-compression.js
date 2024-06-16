/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let i = 0;
    while(i<chars.length){
        let j = 1;
        while(chars[i+j] === chars[i]) j++;
        if(j>1){
            const str = chars[i]+j;
            chars.splice(i, j, ...str);
            i += str.length;
        } else i++;
    }
    return chars.length;
};