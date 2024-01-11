/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
    let distance = [];
    for(let i=0; i<s.length; i++){
        let left, right;
        for(let l=i; l>=0; l--){
            if(s[l] === c){
                left = Math.abs(i-l);
                break;
            } else left = Infinity;
        }
        for(let r=i; r<s.length; r++){
            if(s[r] === c){
                right = Math.abs(i-r);
                break;
            } else right = Infinity;
        }
        distance.push(Math.min(left, right));
    }
    return distance;
};