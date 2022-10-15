/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function(s) {
    let max = -1;
    for(let i=0; i<s.length; i++){
        for(let j=i; j<s.length; j++){
            let tmp = s.slice(i, j+1);
            if(tmp[0] === tmp[tmp.length-1]) max = Math.max(max, j-i-1);
        }
    }
    return max;
};