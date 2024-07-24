/**
 * @param {number[]} colors
 * @return {number}
 */
var numberOfAlternatingGroups = function(colors) {
    let len = colors.length;
    let a = colors[0], b = colors[len-1];
    colors.push(a);
    colors.unshift(b);
    let res = 0;
    for(let i=0; i<len; i++) {
        if(colors[i] == colors[i+2] && colors[i] != colors[i+1]) res++;
    }
    return res;
};