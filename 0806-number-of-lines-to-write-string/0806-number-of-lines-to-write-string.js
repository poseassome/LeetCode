/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function(widths, s) {
    let lines = 1;
    let pixels = 0;
    for(const x of s){
        let width = widths[x.charCodeAt() - 'a'.charCodeAt()];
        if(pixels+width > 100){
            lines++;
            pixels = width;
        } else pixels += width;
    }
    return [lines, pixels];
};