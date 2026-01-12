/**
 * @param {string} s
 * @return {string}
 */
var largestEven = function(s) {
    for(i=s.length-1; i>=0; i--){
        if(s[i]%2 === 0) return s.slice(0, i+1);
    }
    return "";
};