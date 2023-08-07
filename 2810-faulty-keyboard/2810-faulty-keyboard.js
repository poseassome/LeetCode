/**
 * @param {string} s
 * @return {string}
 */
var finalString = function(s) {
    let res = [];
    for(const x of s){
        x === 'i' ? res.reverse() : res.push(x);
    }
    return res.join('');
};