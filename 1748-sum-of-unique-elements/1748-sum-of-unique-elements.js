/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    let sH = new Map();
    let answer = 0;
    for(const x of nums){
        if(sH.has(x)) sH.set(x, sH.get(x)+1);
        else sH.set(x, 1);
    }
    for(const [key, val] of sH){
        if(val === 1) answer += key;
    }
    return answer;
};