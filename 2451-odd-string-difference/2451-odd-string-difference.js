/**
 * @param {string[]} words
 * @return {string}
 */
var oddString = function(words) {
    let map = {}, res = {};
    for(const x of words){
        let key = '';
        for(let i=1; i<x.length; i++){
            key += x[i].charCodeAt()-x[i-1].charCodeAt();
            map[key] = ++map[key] || 1;  
            res[key] = x;
        }
    }
    const key = Object.keys(map).find(el => map[el] === 1);
    return res[key];
};