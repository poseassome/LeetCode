/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function(s) {
    let set = new Set();
    s = s.split("");
    for(const x of s){
        if(x === x.toUpperCase() && s.includes(x.toLowerCase())) set.add(x);         
    }
    let result = [...set].sort();
    return result.length !== 0 ? result[result.length-1] : ""; 
};