/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {boolean}
 */
var areSimilar = function(mat, k) {
    const arr = JSON.stringify(mat);
    for(let i=0; i<k; i++){
        for(let j=0; j<mat.length; j++){
            if(j%2 === 0) mat[j].push(mat[j].shift());
            else mat[j].unshift(mat[j].pop());
        }
    }
    return JSON.stringify(mat) === arr;
};