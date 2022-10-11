/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
var divideString = function(s, k, fill) {
    let result = [];
    for(let i=0; i<s.length; i+=k){
        const element = s.slice(i, i+k);
        if(element.length === k) result.push(element);
        else result.push(element + fill.repeat(k-element.length));
    }
    return result;   
};