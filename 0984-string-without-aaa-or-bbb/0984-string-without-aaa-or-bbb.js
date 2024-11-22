/**
 * @param {number} a
 * @param {number} b
 * @return {string}
 */
var strWithout3a3b = function(a, b) {
    if(!a) return 'b'.repeat(b);
    if(!b) return 'a'.repeat(a);
    if(a<b) return 'bba'+strWithout3a3b(a-1, b-2);
    if(a>b) return 'aab'+strWithout3a3b(a-2, b-1);
    return 'ab'+strWithout3a3b(a-1, b-1);
};