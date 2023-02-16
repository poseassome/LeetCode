/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    const sort = [...new Set([...arr].sort((a,b) => a-b))];
    let answer = [];
    for(let i=0; i<arr.length; i++){
        answer.push(sort.indexOf(arr[i])+1);
    }
    return answer;
};