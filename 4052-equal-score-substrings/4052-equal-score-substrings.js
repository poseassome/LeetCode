/**
 * @param {string} s
 * @return {boolean}
 */
var scoreBalance = function(s) {
    let sum = 0;
    let set = new Set();
    for(let i=0; i<s.length; i++){
        sum += s.charCodeAt(i) - 96;
        set.add(sum);
    }
    if(set.has(sum/2)) return true;
    return false;
};