/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    let answer = [];
    let Min = Number.MAX_SAFE_INTEGER;
    arr.sort((a, b) => a - b);
    
    for (let i=0; i<arr.length-1; i++) {
        let diff = arr[i+1] - arr[i];
        if(diff < Min){
            answer = [[arr[i], arr[i+1]]];
            Min = diff;
        } else if(diff === Min){
            answer.push([arr[i], arr[i+1]]);
        }
    }
    return answer;
};