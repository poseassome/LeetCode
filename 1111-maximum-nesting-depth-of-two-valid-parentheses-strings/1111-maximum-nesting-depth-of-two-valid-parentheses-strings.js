/**
 * @param {string} seq
 * @return {number[]}
 */
var maxDepthAfterSplit = function(seq) {
    let res = [];
    for(let i=0; i<seq.length; i++){
        res.push(seq[i] === "(" ? i & 1 : 1-i & 1);
    }
    return res;
};