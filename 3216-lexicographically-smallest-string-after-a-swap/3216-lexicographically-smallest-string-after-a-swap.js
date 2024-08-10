/**
 * @param {string} s
 * @return {string}
 */
var getSmallestString = function(s) {
    let arr = s.split("");
    for(let i=0; i<arr.length-1; i++){
        if(arr[i]>arr[i+1] && arr[i]%2===arr[i+1]%2){
            [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
            break;
        }
    }
    return arr.join("");
};