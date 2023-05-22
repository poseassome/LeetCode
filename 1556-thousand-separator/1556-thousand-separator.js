/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function(n) {
    n = n.toString();
    let str = '';
    for(let i=0; i<n.length; i++){
        if((n.length-i)%3 === 0 && i !== 0) str += '.';
        str += n[i];
    }
    return str;
};