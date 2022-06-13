/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    let answer = 0;
    let sH = new Map();
    for(let x of arr){
        if(sH.has(x)) sH.set(x, sH.get(x)+1);
        else sH.set(x, 1);
    }
    for(let [key, val] of sH){
        if(key === val){
            if(answer < key) answer = key;
        }
    }
    return answer < 1 ? -1 : answer;
};