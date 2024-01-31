/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
    let res = [], idx = 1;
    for(let i=0; i<target.length; i++){
        if(target[i] === idx) res.push("Push");
        else {
            res.push("Push", "Pop");
            i--;
        }
        idx++;
    }
    return res; 
};