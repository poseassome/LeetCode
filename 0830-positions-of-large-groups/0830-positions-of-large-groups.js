/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function(s) {
    let arr = [], start = 0;
    for(let i=0; i<s.length; i++){
        if(s[i] !== s[i-1]) start = i;
        if(s[i] !== s[i+1] && i-start >= 2) arr.push([start, i])
    }
    return arr;
};