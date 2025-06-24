/**
 * @param {number[][]} score
 * @param {number} k
 * @return {number[][]}
 */
var sortTheStudents = function(score, k) {
    let arr = [], res = [];
    for(let i=0; i<score.length; i++){
        arr.push([score[i][k], i]);
    }
    arr.sort((a,b) => b[0]-a[0]);
    for(let i=0; i<arr.length; i++){
        res.push(score[arr[i][1]]);
    }
    return res;
};